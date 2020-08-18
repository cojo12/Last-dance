import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../pages/Profile";
// import JSONPretty from 'react-json-pretty';

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (

      <div>
      <img src = {user.picture} alt={user.name} />
      <p>{user.name}</p>
      <p>{user.nickname}</p>
      {/* <JSONPretty data={user} /> */}
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  )
  )
}

export default UserProfile