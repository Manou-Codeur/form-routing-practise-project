import React, { Component } from "react";

import Post from "../../common/post/post";
import GenresNav from "../../common/generes-nav/genresNav";
import ContextApi from "../../common/contextApi";
import { getPosts, chosePost } from "../../assets/fakeData";

import "./posts.scss";

class Posts extends Component {
  state = {
    posts: getPosts(),
    selectedPostsGenre: [],
    seletedGenre: "",
  };

  onGnereClick = (type, e) => {
    //init
    const postsClone = [...this.state.posts];
    const postElement = e.target;

    //clean the other classes
    for (let els of postElement.parentNode.childNodes) {
      els.className = "link";
    }
    //update the current item's className
    postElement.className += " selected";

    //update the state
    const selectedPostsGenre = postsClone.filter(post => post.genre === type);
    this.setState({ selectedPostsGenre, seletedGenre: type });
  };

  onPostClick = post => {
    chosePost(post._id);

    this.props.history.push(`/posts/${post._id}`);
  };

  render() {
    return (
      <div className="posts-containner">
        <ContextApi.Provider
          value={{
            genreClick: this.onGnereClick,
          }}
        >
          <div className="genreNav">
            <GenresNav />
          </div>
          <div className="allPost">
            {this.state.selectedPostsGenre.length === 0
              ? this.state.posts.map(post => (
                  <Post
                    key={post._id}
                    data={post}
                    handleClick={this.onPostClick.bind(this, post)}
                  />
                ))
              : this.state.selectedPostsGenre.map(post => (
                  <Post
                    key={post._id}
                    data={post}
                    handleClick={this.onPostClick.bind(this, post)}
                  />
                ))}
          </div>
        </ContextApi.Provider>
      </div>
    );
  }
}

export default Posts;
