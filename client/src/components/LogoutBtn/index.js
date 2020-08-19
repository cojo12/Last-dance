import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "reactstrap";
import "./style.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button className="logoutBtn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;