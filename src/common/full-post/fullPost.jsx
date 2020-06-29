import React from "react";

import "./fullPost.scss";

const FullPost = props => {
  const data = window.selectedPost;
  const handleBack = () => {
    props.history.push("/posts");
  };

  return (
    <div className="fullPost">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <button className="btn btn-primary" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default FullPost;
