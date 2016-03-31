import { Route, IndexRoute } from 'react-router'
import React from 'react'
import {
  App
} from './containers'

import {
  Home
} from './pages'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    {/* <Route path="/post/:slug" component={PostDetailView}/> */}
  </Route>
)
