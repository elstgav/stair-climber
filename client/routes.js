import { Route, IndexRoute } from 'react-router'
import React from 'react'
import {
  AppContainer
} from './containers'

import {
  HomePage,
} from './pages'

export default (
  <Route path="/" component={AppContainer} >
    <IndexRoute component={HomePage} />
    {/* <Route path="/post/:slug" component={PostDetailView}/> */}
  </Route>
)
