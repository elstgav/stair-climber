import { Route, IndexRoute } from 'react-router'
import React from 'react'
import {
  AppContainer
} from './containers'

import {
  LeaderboardPage,
  FlightTrackerPage,
  AccountPage
} from './pages'

export default (
  <Route path="/" component={AppContainer} >
    <IndexRoute component={FlightTrackerPage} />
    <Route path="/leaderboard" component={LeaderboardPage} />
    <Route path="/account" component={AccountPage} />
  </Route>
)
