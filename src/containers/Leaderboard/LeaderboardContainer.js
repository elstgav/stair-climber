import React from 'react'
import Axios from 'axios'
import { Leaderboard } from '_/src/components'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monthlyLeaders: [],
      weeklyLeaders: []
    }
  }

  componentDidMount() {
    Axios.get('http://step-up-api.herokuapp.com/')
         .then(response => {
           var leaders = response.data.sort((a, b) => a.total_flights - b.total_flights).reverse()
           this.setState({
             monthlyLeaders: leaders,
             weeklyLeaders: leaders.slice(0, 3),
           })
         })
         .catch(error => console.log(error))
  }

  render() {
    return (
      <div id="leaderboard">
        <Leaderboard title="March leaderboard" leaders={this.state.monthlyLeaders}/>
        <Leaderboard title="Weekly leaders"    leaders={this.state.weeklyLeaders}/>
      </div>
    )
  }
}
