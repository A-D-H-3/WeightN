import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/challenge">Challenge</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  );
}

export default Header;
