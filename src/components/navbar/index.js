import React from "react";
import '../navbar/style.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Navigation({}) {

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
              <NavLink href="/favorites/">My Itineraries</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>

      </Navbar>
    </div>
  )
  }

export default Navigation;