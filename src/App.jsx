import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "./components/nav-bar/navBar";
import Posts from "./components/posts/posts";
import NewPost from "./components/new-post/newPost";
import FullPost from "./common/full-post/fullPost";
import NotFound from "./components/not-found/notFound";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />

        <Switch>
          {/* <Route path="/posts/:id" component={FullPost} /> */}
          <Route path="/posts" component={Posts} />
          <Route path="/newPost" component={NewPost} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/posts" />
          <Redirect to="/not-found" />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
