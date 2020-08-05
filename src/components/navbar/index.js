import React from "react";
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
        <NavbarBrand href="/">Journey</NavbarBrand>
      </Navbar>
    </div>
  )
}

export default Navigation;