import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import ContextApi from "../contextApi";

import "./genresNav.scss";

const GenresNav = () => {
  const context = useContext(ContextApi);

  return (
    <nav className="sub-nav">
      <NavLink
        className="link"
        to="/posts"
        exact
        activeClassName="active-links"
        onClick={context.genreClick.bind(this, "all")}
      >
        All
      </NavLink>
      <NavLink
        className="link"
        to="/posts/tech"
        onClick={context.genreClick.bind(this, "tech")}
        activeClassName="active-links"
      >
        Tech
      </NavLink>
      <NavLink
        className="link"
        to="/posts/sport"
        onClick={context.genreClick.bind(this, "sport")}
        activeClassName="active-links"
      >
        Sport
      </NavLink>
      <NavLink
        className="link"
        to="/posts/business"
        onClick={context.genreClick.bind(this, "business")}
        activeClassName="active-links"
      >
        Business
      </NavLink>
      <NavLink
        className="link"
        to="/posts/science"
        onClick={context.genreClick.bind(this, "science")}
        activeClassName="active-links"
      >
        Science
      </NavLink>
    </nav>
  );
};

export default GenresNav;
