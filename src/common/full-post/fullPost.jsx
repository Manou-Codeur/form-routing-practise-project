import React from "react";

import "./fullPost.scss";

const FullPost = () => {
  const data = window.selctedPost;
  return (
    <div className="fullPost">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default FullPost;
