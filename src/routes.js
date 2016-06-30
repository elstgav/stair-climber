import { Route, IndexRoute } from 'react-router'
import React from 'react'
import {
  AuthenticatedContainer,
} from './containers'

import {
  AccountPage,
  Layout,
  FlightTrackerPage,
  LeaderboardPage,
} from './pages'

export default (
  <Route component={Layout} >
    <Route path="/" component={AuthenticatedContainer} >
      <IndexRoute component={FlightTrackerPage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
    </Route>
    <Route path="/account" component={AccountPage}     />
  </Route>
)
