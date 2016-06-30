import React from 'react'
import { LeaderboardList } from './LeaderboardList'

const Leaderboard = ({ title, leaders }) =>
  <div>
    <h2>{title}</h2>
    <LeaderboardList leaders={leaders} />
  </div>

Leaderboard.propTypes = {
  title: React.PropTypes.string,
  leaders: React.PropTypes.arrayOf(React.PropTypes.object),
}

export { Leaderboard }
