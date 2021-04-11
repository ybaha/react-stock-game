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
        <PrivateRoute path="/react-stock-game/" component={App} />
        <PrivateRoute path="/react-stock-game/update-profile" component={UpdateProfile} />
        {/* <Route render={() => <NoMatch text={"PrivateRoutes"} />} /> */}
      </Switch>
    )

  }

  const AuthRoutes = () => {
    return (
      <Switch>
        <Route exact path="/react-stock-game/" component={Login} />
        <Route path="/react-stock-game/login" component={Login} />
        <Route path="/react-stock-game/signup" component={Signup} />
        <Route path="/react-stock-game/forgot-password" component={ForgotPassword} />
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
