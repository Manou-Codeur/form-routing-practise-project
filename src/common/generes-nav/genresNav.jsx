import React, { useContext } from "react";

import { Link } from "react-router-dom";
import ContextApi from "../contextApi";

const GenresNav = () => {
  const context = useContext(ContextApi);

  return (
    <nav className="sub-nav">
      <Link to="/posts/tech" onClick={context.genreClick.bind(this, "tech")}>
        Tech
      </Link>
      <Link to="/posts/sport">Sport</Link>
      <Link to="/posts/businnes">Bussines</Link>
      <Link to="/posts/science">Science</Link>
    </nav>
  );
};

export default GenresNav;
