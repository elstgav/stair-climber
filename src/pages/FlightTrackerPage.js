import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'

import FlightTracker from 'src/lib/FlightTracker'
import People        from 'src/lib/People'

import {
  DatePicker,
  FlightsForm,
  OldLeaderboard,
  UserPicker,
} from 'src/components'


export class FlightTrackerPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entryDate: moment(),
      person: People.get(0),
    }
  }

  onEntryDateChanged = (entryDate) => {
    this.setState({ entryDate })
  }

  onFlightsChanged = (flights) => {
    this.state.person.flightsClimbed.set(this.state.entryDate, flights)
    this.setState({
      person: this.state.person,
    })
  }

  onPersonChanged = (person) => {
    this.setState({ person })
  }

  render() {
    return (
      <div id="FlightTrackerContainer" className="container">
        {<Helmet title="Home" />}

        <h1>StepUp</h1>

        <UserPicker user={this.state.person} onChange={this.onPersonChanged} />

        <DatePicker
          selected={this.state.entryDate}
          onChange={this.onEntryDateChanged}
        />
        <FlightsForm
          homeFloor={this.state.person.homeFloor}
          value={this.state.person.flightsClimbed.get(this.state.entryDate)}
          onChange={this.onFlightsChanged}
        />

        <OldLeaderboard people={People} flightTracker={FlightTracker} />
      </div>
    )
  }
}
