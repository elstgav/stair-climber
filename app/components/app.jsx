import React from 'react'
import moment from 'moment'

import FlightTracker from '../stores/flight-tracker'
import People from '../stores/people'

import DatePicker from './date-picker'
import FlightsForm from './flights-form'
import Leaderboard from './leaderboard'


const App = React.createClass({
  getInitialState() {
    return {
      entryDate: moment(),
      person: null
    }
  },

  onEntryDateChanged(date) {
    this.setState({
      entryDate: date
    })
  },

  onFlightsChanged(flights) {
    this.state.person.flightsClimbed.set(this.state.entryDate, flights)
    this.setState({
      person: this.state.person
    })
  },

  onPersonChanged(event) {
    let personId = parseInt(event.target.value)
    this.setState({
      person: People.get(personId)
    })
  },

  entryForm() {
    if (!this.state.person) return
    return (
      <div>
        <h2>{this.state.entryDate.format('dddd')}</h2>
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
  },

  render() {
    return (
      <div>
        <h1>Stair Climber</h1>

        <select value={this.person} onChange={this.onPersonChanged}>
          <option>Select a person…</option>
          {People.map(person =>
            <option key={person.id} value={person.id}>{person.fullName}</option>
          )}
        </select>

        {this.entryForm()}

        <Leaderboard people={People} flightTracker={FlightTracker}/>
      </div>
    )
  }
})

export default App
