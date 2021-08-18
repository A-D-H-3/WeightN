import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';

function BaseNav(){
  return(
    <Nav justify variant="tabs" defaultActiveKey="/" >
      <Nav.Item><NavLink to="/">Home</NavLink></Nav.Item>
      <Nav.Item><NavLink to="/about">About</NavLink></Nav.Item>
      <Nav.Item><NavLink to="/login">Login</NavLink></Nav.Item>
    </Nav>
  )
}

export {BaseNav}