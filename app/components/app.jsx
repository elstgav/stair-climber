import React from 'react'
import moment from 'moment'

import FlightTracker from '../data/flight-tracker'

import DatePicker from './date-picker'
import FlightsForm from './flights-form'

const FEET_PER_FLIGHT = 13

const App = React.createClass({
  getInitialState() {
    return {
      entryDate: moment(),
      homeFloor: 15,
      flightsClimbed: new FlightTracker()
    }
  },

  onEntryDateChanged(date) {
    this.setState({
      entryDate: date
    })
  },

  onFlightsChanged(flights) {
    this.state.flightsClimbed.set(this.state.entryDate, flights)
    this.setState({
      flightsClimbed: this.state.flightsClimbed
    })
  },

  totalFlights() {
    return this.state.flightsClimbed.total()
  },

  totalElevation() {
    return this.totalFlights() * FEET_PER_FLIGHT
  },

  render() {
    return (
      <div>
        <h1>Stair Climber</h1>
        <h2>{this.state.entryDate.format('dddd')}</h2>
        <DatePicker
          selected={this.state.entryDate}
          onChange={this.onEntryDateChanged}
        />
        <FlightsForm
          homeFloor={this.state.homeFloor}
          value={this.state.flightsClimbed.get(this.state.entryDate)}
          onChange={this.onFlightsChanged}
        />
        <h2>Total</h2>
        <table>
          <thead>
            <tr>
              <th>Flights</th>
              <th>Elevation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.totalFlights()} flights</td>
              <td>{this.totalElevation()} feet</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

export default App
