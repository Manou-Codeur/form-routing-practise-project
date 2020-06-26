import React from "react";
import { NavLink } from "react-router-dom";

import "../App.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink className="link" activeClassName="active" to="/login">
        Login
      </NavLink>
      <NavLink className="link" activeClassName="active" to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default NavBar;
