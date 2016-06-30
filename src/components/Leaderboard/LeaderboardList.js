import React from 'react'
import { LeaderboardListElement } from './LeaderboardListElement'

const LeaderboardList = ({ leaders }) =>
  <table>
    <tbody>
      {leaders.map((leader, index) =>
        <LeaderboardListElement key={index + 1} rank={index + 1} leader={leader} />)}
    </tbody>
  </table>

LeaderboardList.propTypes = {
  leaders: React.PropTypes.arrayOf(React.PropTypes.object),
}

export { LeaderboardList }
