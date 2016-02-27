import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './container/App'
import Home from './container/Home'
// import PostDetailView from './container/PostDetailView'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    {/* <Route path="/post/:slug" component={PostDetailView}/> */}
  </Route>
)

export default routes
