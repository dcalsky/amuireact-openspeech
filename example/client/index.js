import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {render} from 'react-dom'
import React from 'react'

import App from './containers/App'
import Landing from './containers/Landing'

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
      </Route>
    </Router>,
  document.getElementById('root')
)
