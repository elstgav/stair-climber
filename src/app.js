import React from 'react'
import routes from './routes'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { DataWrapper } from 'src/components'
const data  = JSON.parse(document.getElementById('data').innerHTML)
const dest = document.getElementById('app')

render((
  <DataWrapper data={data}>
    <Router history={browserHistory} routes={routes} />
  </DataWrapper>
), dest)

if (process.env.NODE_ENV !== 'production') {
  window.React = React // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) { // eslint-disable-line
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.') // eslint-disable-line
  }
}
