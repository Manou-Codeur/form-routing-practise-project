import React, { Component } from "react";

import { getChosenPost } from "../../assets/fakeData";

import "./fullPost.scss";

class FullPost extends Component {
  handleBack = () => {
    this.props.history.push("/posts");
  };

  render() {
    const data = getChosenPost();

    return (
      <div className="fullPost">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <button className="btn btn-primary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default FullPost;
