import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/Nav-bar";
import Login from "./components/Login";
import Register from "./components/register";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />

      <div className="routeAre">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" render={() => <h1>Home</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
