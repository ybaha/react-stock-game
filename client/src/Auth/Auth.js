import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import App from '../App/App'
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Signup from "./Signup"

const Auth = () => {

  const noMatch = () => {
    return <h1>No Match</h1>
  }

  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={App} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route component={noMatch} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default Auth
