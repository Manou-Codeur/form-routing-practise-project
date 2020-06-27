import React from "react";

import "./post.scss";

const Post = props => {
  const { data, handleClick } = props;

  return (
    <div className="post-box" id={data._id} onClick={handleClick}>
      <h5>{data.title}</h5>
      <p>{data.subContent}</p>
    </div>
  );
};

export default Post;
