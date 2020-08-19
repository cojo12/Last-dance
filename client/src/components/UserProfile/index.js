import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import { Container } from "reactstrap";

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Container className="userProf" fluid>
      <div>
      <img 
      height="120px"
      width="120px"
      src = {user.picture}
      alt={user.name} />
      <h4>{user.nickname}</h4>
      <h6>{user.name}</h6>
    </div>
      </Container>
  )
  )
}

export default UserProfile