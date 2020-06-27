import React, { Component } from "react";

import Post from "../../common/post/post";
import GenresNav from "../../common/generes-nav/genresNav";
import ContextApi from "../../common/contextApi";

import "./posts.scss";

class Posts extends Component {
  state = {
    posts: "",
  };

  onGnereClick = type => {
    console.log(type + " clicked");
  };

  render() {
    return (
      <div className="posts-containner">
        <ContextApi.Provider value={{ genreClick: this.onGnereClick }}>
          <GenresNav />
          <Post />
        </ContextApi.Provider>
      </div>
    );
  }
}

export default Posts;
