import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import ContextApi from "../contextApi";

import "./genresNav.scss";

const GenresNav = () => {
  const context = useContext(ContextApi);

  return (
    <nav className="sub-nav">
      <p
        className="link selected"
        onClick={context.genreClick.bind(this, "all")}
      >
        All
      </p>
      <p className="link" onClick={context.genreClick.bind(this, "tech")}>
        Tech
      </p>
      <p className="link" onClick={context.genreClick.bind(this, "sport")}>
        Sport
      </p>
      <p className="link" onClick={context.genreClick.bind(this, "business")}>
        Business
      </p>
      <p className="link" onClick={context.genreClick.bind(this, "science")}>
        Science
      </p>
    </nav>
  );
};

export default GenresNav;
