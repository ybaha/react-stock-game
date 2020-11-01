import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import App from '../App/App'
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Signup from "./Signup"

import { useAuth } from '../contexts/AuthContext'

const Router = () => {

  const { currentUser } = useAuth()
  console.log(currentUser);

  const NoMatch = (props) => {
    return (<h1>No Match {props.text}</h1>)
  }

  const PrivateRoutes = () => {
    return (
      <Switch>
        <PrivateRoute path="/" component={App} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        {/* <Route render={() => <NoMatch text={"PrivateRoutes"} />} /> */}
      </Switch>
    )

  }

  const AuthRoutes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route render={() => <NoMatch text={"AuthRoutes"} />} />
      </Switch>
    )
  }

  return (
    <BrowserRouter>
      {currentUser ? <PrivateRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

export default Router
