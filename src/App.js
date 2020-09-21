import React from "react";
import "./App.css";
import { Dashboard, Login, PrivateRoute, PublicRoute } from "./components";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Redirect from="/" to="/login" />
      <Switch>
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}



export default App;
