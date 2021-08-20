import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function AuthNav(){
  return(
    <Nav justify variant="tabs" defaultActiveKey="/" >
      <Nav.Item><NavLink to="/challenge">Challenge</NavLink></Nav.Item>
      <Nav.Item><NavLink to="/dashboard">Dashboard</NavLink></Nav.Item>
      <Nav.Item><NavLink to="/profile">Profile</NavLink></Nav.Item>
      <Nav.Item><NavLink to="/logout">Logout</NavLink></Nav.Item>
    </Nav>
  )
}

export {AuthNav}