import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token){
  setAuthToken(localStorage.token)
}
const App = () =>  {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/">
          <Landing />
        </Route>
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
