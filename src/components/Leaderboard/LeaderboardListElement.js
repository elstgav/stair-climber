import React from 'react'

const LeaderboardListElement = ({ rank, leader }) => {
  const FEET_PER_FLIGHT = 13

  function elevation(flights) {
    return `${(flights * FEET_PER_FLIGHT).toLocaleString()} ft`
  }

  return (
    <tr>
      <td>{rank}</td>
      <td>{leader.name}</td>
      <td>{elevation(leader.total)}</td>
    </tr>
  )
}

LeaderboardListElement.propTypes = {
  key: React.PropTypes.number,
  rank: React.PropTypes.number,
  leader: React.PropTypes.object,
}

export { LeaderboardListElement }
