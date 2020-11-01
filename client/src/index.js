import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from './Auth/Router'
import { AuthProvider } from "./contexts/AuthContext"
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <AuthProvider>
    <Router />
  </AuthProvider>
  ,
  document.getElementById('root')
)


serviceWorker.unregister();
