import React from 'react'
import Helmet from 'react-helmet'
import api from 'src/lib/api'
import { LeaderboardContainer } from 'src/containers'

export default React.createClass({

  render() {
    return (
      <div>
        <Helmet title="Leaderboard" />
        <LeaderboardContainer />
      </div>
    )
  },

})
