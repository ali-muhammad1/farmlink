import React from "react";
import { Router, Route, Switch } from "react-router";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import Login from "./login/Login";
import Home from "./home/Home";
import SecureRoute from "../components/SecureRoute";
import MainComponent from "../components/main/Main";

const history = createBrowserHistory();

const App = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={() => <Login />} />
        <MainComponent>
          <SecureRoute
            isAuthenticated={props.isAuthenticated}
            path="/"
            exact
            component={() => <Home />}
          />
        </MainComponent>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.entities.isAuthenticated,
  };
};

export default connect(mapStateToProps, {})(App);
