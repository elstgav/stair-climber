import React from 'react'

const FEET_PER_FLIGHT = 13

function totalElevation(person) {
  return `${(person.total_flights * FEET_PER_FLIGHT).toLocaleString()} ft`
}

const Leaderboard = React.createClass({
  getInitialState() {
    return {
      today: moment('2016-01-01')
    }
  },

  render() {
    return (
      <div>
        <h2>{this.state.today.format('MMMM')} Leaderboard</h2>
        <ol className="leaderboard">
          {this.props.leaders.map((person) => {
            return (
              <li>
                <div className="leaderboard-rank"></div>
                <div className="leaderboard-name">{person.full_name}</div>
                <div className="leaderboard-total">{totalElevation(person)}</div>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
})

export default Leaderboard
