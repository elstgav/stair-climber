import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'

import FlightTracker from 'src/lib/FlightTracker'
import People        from 'src/lib/People'

import {
  DatePicker,
  FlightsForm,
  OldLeaderboard,
} from 'src/components'


export default React.createClass({
  getInitialState() {
    return {
      entryDate: moment(),
      person: People.get(0),
    }
  },

  onEntryDateChanged(date) {
    this.setState({
      entryDate: date,
    })
  },

  onFlightsChanged(flights) {
    this.state.person.flightsClimbed.set(this.state.entryDate, flights)
    this.setState({
      person: this.state.person,
    })
  },

  onPersonChanged(event) {
    let personId = parseInt(event.target.value)
    this.setState({
      person: People.get(personId),
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
      <div id="FlightTrackerContainer">
        {<Helmet title='Home'/>}
        <h1>StepUp</h1>

        <label htmlFor="change-user">Switch user: </label>
        <select id="change-user" value={this.state.person.id} onChange={this.onPersonChanged}>
          <option>Switch user…</option>
          {People.map(person =>
            <option key={person.id} value={person.id}>{person.fullName}</option>
          )}
        </select>

        {this.entryForm()}

        <OldLeaderboard people={People} flightTracker={FlightTracker}/>
      </div>
    )
  }
})
