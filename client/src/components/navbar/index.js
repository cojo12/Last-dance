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
      <Navbar className="mainNav" expand="md">
      <img 
      height="40px"
      width="130px"
      src = {'/journey-logo.png'}
      alt = "Journey Logo"
      />
          
        <Nav className="mr-auto" navbar>
            <NavItem>
              {isAuthenticated && (<NavLink className="tabLink" href="/discover/">Discover</NavLink>)}
            </NavItem>
            <NavItem>
              {isAuthenticated && (<NavLink className="tabLink" href="/createitinerary/">Create Itinerary</NavLink>)}
            </NavItem>
          </Nav>
          <a href = "/profile/" target="_blank">
            {isAuthenticated && (<Button className="profileBtn"><i className="fas fa-user-ninja"></i></Button>)}
          </a>
          {!isAuthenticated && (<LoginButton />)}
          {isAuthenticated && (<LogoutButton className="logoutBtn"/>)}

      </Navbar>

    </div>
  )
  }

export default Navigation;