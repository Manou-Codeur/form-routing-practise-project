import React, { Component } from "react";

import Post from "../../common/post/post";
import GenresNav from "../../common/generes-nav/genresNav";
import ContextApi from "../../common/contextApi";
import { getPosts } from "../../assets/fakeData";

import "./posts.scss";

class Posts extends Component {
  state = {
    posts: getPosts(),
    selectedPostsGenre: [],
    seletedGenre: "",
  };

  onGnereClick = type => {
    const postsClone = [...this.state.posts];
    const selectedPostsGenre = postsClone.filter(post => post.genre === type);
    this.setState({ selectedPostsGenre, seletedGenre: type });
  };

  onPostClick = id => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    return (
      <div className="posts-containner">
        <ContextApi.Provider value={{ genreClick: this.onGnereClick }}>
          <div className="genreNav">
            <GenresNav />
          </div>
          <div className="allPost">
            {this.state.selectedPostsGenre.length === 0
              ? this.state.posts.map(post => (
                  <Post
                    key={post._id}
                    data={post}
                    handleClick={this.onPostClick.bind(this, post._id)}
                  />
                ))
              : this.state.selectedPostsGenre.map(post => (
                  <Post
                    key={post._id}
                    data={post}
                    handleClick={this.onPostClick.bind(this, post._id)}
                  />
                ))}
          </div>
        </ContextApi.Provider>
      </div>
    );
  }
}

export default Posts;
