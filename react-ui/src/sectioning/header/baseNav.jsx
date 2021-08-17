import { NavLink } from "react-router-dom";

function BaseNav(){
  return(
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  )
}

export {BaseNav}