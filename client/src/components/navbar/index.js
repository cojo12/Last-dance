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
      <img
      src = {'/journey-logo.png'}
      alt = "Journey Logo"
      />
          
        <Nav className="mr-auto" navbar>
            <NavItem>
              {isAuthenticated && (<NavLink href="/discover/">Discover</NavLink>)}
            </NavItem>
            <NavItem>
              {isAuthenticated && (<NavLink href="/createitinerary/">Create Itinerary</NavLink>)}
            </NavItem>
          </Nav>
          <a href = "/profile/" target="_blank">
            {isAuthenticated && (<Button><i class="fas fa-user-ninja"></i></Button>)}
          </a>
          {!isAuthenticated && (<LoginButton/>)}
          {isAuthenticated && (<LogoutButton/>)}

      </Navbar>
      {!isAuthenticated && (<div>Take a Journey</div>)}
    </div>
  )
  }

export default Navigation;