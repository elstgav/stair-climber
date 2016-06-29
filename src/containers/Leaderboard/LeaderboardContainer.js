import React from 'react'
import { Leaderboard } from 'src/components'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monthlyLeaders: [
        {
          name: "Pavel Sorokin",
          total_flights: 370
        },
        {
          name: "Chris Ziobro",
          total_flights: 355
        },
        {
          name: "Gavin Elster",
          total_flights: 340
        },
        {
          name: "Cassondra Copeland",
          total_flights: 310
        },
        {
          name: "Matt Ritchie",
          total_flights: 290
        }
      ],
      weeklyLeaders: [
        {
          name: "Pavel Sorokin",
          total_flights: 62
        },
        {
          name: "Chris Ziobro",
          total_flights: 51
        },
        {
          name: "Gavin Elster",
          total_flights: 44
        }
      ]
    }
  }

  render() {
    return (
      <div id="leaderboard">
        <Leaderboard title="March leaderboard" leaders={this.state.monthlyLeaders}/>
        <Leaderboard title="Weekly leaders" leaders={this.state.weeklyLeaders}/>
      </div>
    )
  }
}
