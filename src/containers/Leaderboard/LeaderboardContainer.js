import React from 'react'
import Axios from 'axios'
import { Leaderboard } from 'src/components'
import { getFirebase } from 'src/lib/firebaseAdapter'

export class LeaderboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monthlyLeaders: [],
      weeklyLeaders: [],
    }
  }

  componentDidMount() {
    getFirebase().database()
                 .ref('users')
                 .once('value')
                 .then(usersSnapshot => {
                   const users = usersSnapshot.val()
                   this.setState({ users })

                   getFirebase().database()
                                .ref('flights')
                                .once('value')
                                .then(snapshot => {
                                  const data = snapshot.val()
                                  if (data) {
                                    this.setMonthlyLeaders(this.state.users, data)
                                    this.setWeeklyLeaders(this.state.users, data)
                                  }
                                })
                 })

    Axios.get('http://step-up-api.herokuapp.com/')
         .then(response => {
           const leaders = response.data.sort((a, b) => a.total_flights - b.total_flights).reverse()
           this.setState({
             monthlyLeaders: leaders,
             weeklyLeaders: leaders.slice(0, 3),
           })
         })
         .catch(error => console.log(error))
  }

  getLeadersAfter = (users, data, afterDate) => {
    let array = Object.keys(data).map(uid => {
      return {
        uid: uid,
        climbs: Object.keys(data[uid]).map(date => {
          return {
            date: date,
            flights_climbed: data[uid][date].flights_climbed,
          }
        }),
      }
    })

    array = array.map(entry => {
      return {
        uid: entry.uid,
        climbs: entry.climbs.filter(climb => Date.parse(climb.date) > afterDate),
      }
    })

    // Get totals
    array = array.map(entry => {
      return {
        name: users[entry.uid].name,
        total: entry.climbs.map(climb => climb.flights_climbed).reduce((prev, cur) => prev + cur),
      }
    })

    // Sort by total
    array = array.sort((a, b) => a.total - b.total).reverse()

    return array
  }

  setMonthlyLeaders = (users, data) => {
    // Filter based on date
    const monthAgo = new Date()
    monthAgo.setMonth(monthAgo.getMonth() - 1)

    this.setState({ monthlyLeaders: this.getLeadersAfter(users, data, monthAgo) })
  }

  setWeeklyLeaders = (users, data) => {
    // Filter based on date
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    this.setState({ weeklyLeaders: this.getLeadersAfter(users, data, weekAgo) })
  }


  render() {
    return (
      <div id="leaderboard" className="container">
        <Leaderboard title="March leaderboard" leaders={this.state.monthlyLeaders} />
        <Leaderboard title="Weekly leaders"    leaders={this.state.weeklyLeaders} />
      </div>
    )
  }
}
