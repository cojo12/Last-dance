import React from "react";
import './style.css'
import '../navbar/style.css'
import LoginButton from '../LoginButton';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';


function Navigation() {

  return (

    <div>
      <Navbar className="navCover" expand="md">
        {/* <NavbarBrand href="/">Journey</NavbarBrand> */}
      <img
      src = {'/journey-logo.png'}
      alt = "Journey Logo"
      />
          
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/discover/">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createitinerary/">Create Itinerary</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/signup/">Sign Up</NavLink>
            </NavItem> */}
          </Nav>
          <a href = "/profile/" target="_blank">
            <Button>My Profile</Button>
          </a>
          <LoginButton/>

      </Navbar>
    </div>
  )
  }

export default Navigation;