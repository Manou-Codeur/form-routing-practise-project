import React from "react";

import "./fullPost.scss";

const FullPost = props => {
  return <h1>Full Post with id: {props.match.params.id}</h1>;
};

export default FullPost;
