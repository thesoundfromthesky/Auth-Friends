import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navbar">
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="active" to="/login">
        Login
      </NavLink>
    </div>
  );
}
