import React from "react";

import { getChosenPost } from "../../assets/fakeData";

import "./fullPost.scss";

const FullPost = ({ history, match }) => {
  const handleBack = () => {
    history.push("/posts");
  };
  const data = getChosenPost(match.params.id);

  if (match.params.id === data._id)
    return (
      <div className="fullPost">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <button className="btn btn-primary" onClick={handleBack}>
          Back
        </button>
      </div>
    );
  else {
    history.replace("/not-found");
    return <h1>not found</h1>;
  }
};

export default FullPost;
