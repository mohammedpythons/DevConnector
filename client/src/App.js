import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/">
        <Landing />
      </Route>
      <section className="container">
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
