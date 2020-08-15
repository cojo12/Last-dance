import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import SignUpButton from "../components/SignUp/index";

ReactDOM.render(
  <Auth0Provider
  domain="dev-9twrzt23.us.auth0.com"
  clientId="Dl955R6K3XURavHuI89797FuyeD6rSuZ"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  <SignUpButton/>,
  document.getElementById("root")
);



export default NewLogin;