import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'
import {Provider} from 'react-redux'
import Login from './pages/Login';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Route>
      <Route path='/dashboard' component={App}/>
      <Route path='/login' component={Login}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'))

registerServiceWorker()
