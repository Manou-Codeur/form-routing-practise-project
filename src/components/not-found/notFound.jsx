import React from "react";

import "./notFound.scss";
import notFoundIcon from "../../assets/error-colored.svg";

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={notFoundIcon} alt="" />
      <h1>Oops... Page not Found!</h1>
    </div>
  );
};

export default NotFound;
