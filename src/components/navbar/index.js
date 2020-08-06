import React from "react";
import '../navbar/style.css'


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
      <Navbar color="light" light expand="md">
        {/* <NavbarBrand href="/">Journey</NavbarBrand> */}
      <img
      src = {'/images/logo/journey-logo_transparent-crop.png'}
      alt = "Journey Logo"
      />
          
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/discover/">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/favorites/">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/itineraries/">My Itineraries</NavLink>
            </NavItem>
          </Nav>
          <a href = "/profile/" target="_blank">
            <Button>My Profile</Button>
          </a>

      </Navbar>
    </div>
  )
  }

export default Navigation;