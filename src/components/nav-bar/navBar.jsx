import React from "react";
import { NavLink } from "react-router-dom";

import "./nav-bar.scss";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <NavLink className="link" activeClassName="activeLink" to="/posts">
        Posts
      </NavLink>
      <NavLink className="link" activeClassName="activeLink" to="/newPost">
        New Posts
      </NavLink>
    </nav>
  );
};

export default NavBar;
