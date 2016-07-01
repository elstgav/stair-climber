import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'

import FlightTracker from 'src/lib/FlightTracker'
import People        from 'src/lib/People'

import { getFirebase } from 'src/lib/firebaseAdapter'

import {
  DatePicker,
  FlightsForm,
  /* OldLeaderboard,
   * UserPicker,*/
} from 'src/components'


export class FlightTrackerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entryDate: moment(),
      person: People.get(0),
    }
  }

  componentDidMount() {
    getFirebase().auth().onAuthStateChanged(user => {
      if (user) {
        getFirebase().database()
          .ref(`users/${user.uid}`)
          .on('value', snapshot => {
            this.setState({ user: Object.assign({}, snapshot.val(), { uid: user.uid }) })
            this.getFlightsClimbed(this.state.user.uid, this.state.entryDate.format('YYYY-MM-DD'))
          })
      }
    })
  }

  onEntryDateChanged = (entryDate) => {
    this.setState({ entryDate })
  }

  onFlightsChanged = (flights) => {
    this.state.person.flightsClimbed.set(this.state.entryDate, flights)
    this.setState({
      person: this.state.person,
    })
    this.setFlightsClimbed(flights, this.state.user.uid, this.state.entryDate.format('YYYY-MM-DD'))
  }

  onPersonChanged = (person) => {
    this.setState({ person })
  }

  getFlightsClimbed = (uid, date) => {
    getFirebase().database()
                 .ref(`flights/${uid}/${date}`)
                 .once('value')
                 .then(snapshot => {
                   const data = snapshot.val()
                   console.log('Getting:', `flights/${uid}/${date}`, data)
                   this.state.person.flightsClimbed.set(this.state.entryDate, data.flights_climbed)
                   this.setState({
                     person: this.state.person,
                   })
                 })
  }

  setFlightsClimbed = (flights, uid, date) => {
    console.log('Storing:', `flights/${uid}/${date}`, flights)
    getFirebase().database()
           .ref(`flights/${uid}/${date}`)
           .update({ flights_climbed: flights })
  }

  render() {
    return (
      <div id="FlightTrackerContainer" className="container">
        {<Helmet title="Home" />}

        <h1>StepUp</h1>

        {this.state.user && <p>Hello {this.state.user.name}!</p>}

        <DatePicker
          selected={this.state.entryDate}
          onChange={this.onEntryDateChanged}
        />
        <FlightsForm
          homeFloor={this.state.person.homeFloor}
          value={this.state.person.flightsClimbed.get(this.state.entryDate)}
          onChange={this.onFlightsChanged}
        />
      </div>
    )
  }
}
