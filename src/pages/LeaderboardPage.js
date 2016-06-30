import React from 'react'
import Helmet from 'react-helmet'
import { LeaderboardContainer } from 'src/containers'

export const LeaderboardPage = () =>
  <div>
    <Helmet title="Leaderboard" />
    <LeaderboardContainer />
  </div>
