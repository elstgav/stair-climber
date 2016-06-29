import React from 'react'
import _ from 'lodash'

const OldLeaderboard = React.createClass({
  sortedPeople() {
    return _(this.props.people.getAll())
      .sortBy(p => p.flightsClimbed.totalFlights())
      .reverse()
      .value()
  },

  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Person</th>
              <th>Flights</th>
              <th>Elevation</th>
            </tr>
          </thead>
          <tbody>
            {
              this.sortedPeople().map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.fullName}</td>
                    <td>{person.flightsClimbed.totalFlights()} flights</td>
                    <td>{person.flightsClimbed.totalElevation()} feet</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
})

export default OldLeaderboard
