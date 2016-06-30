import { Route, IndexRoute } from 'react-router'
import React from 'react'
import {
  AppContainer,
  AuthenticatedContainer,
} from './containers'

import {
  AccountPage,
  FlightTrackerPage,
  LeaderboardPage,
} from './pages'

export default (
  <Route component={AppContainer} >
    <Route path="/" component={AuthenticatedContainer} >
      <IndexRoute component={FlightTrackerPage} />
      <Route path="/leaderboard" component={LeaderboardPage} />
    </Route>
    <Route path="/account"     component={AccountPage}     />
  </Route>
)
