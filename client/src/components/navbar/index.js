import React from "react";
import '../navbar/style.css'
import LoginButton from '../LoginButton';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import LogoutButton from "../LogoutBtn";
import { useAuth0 } from "@auth0/auth0-react";


function Navigation() {

  const {isAuthenticated} = useAuth0();

  return (

    <div>
      <Navbar color="light" light expand="md">
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
          {!isAuthenticated && (<LoginButton/>)}
          {isAuthenticated && (<LogoutButton/>)}

      </Navbar>
    </div>
  )
  }

export default Navigation;