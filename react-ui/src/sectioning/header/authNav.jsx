import { NavLink } from "react-router-dom";

function AuthNav(){
  return(
    <>
      <NavLink to="/challenge">Challenge</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/logout">Logout</NavLink>
    </>
  )
}

export {AuthNav}