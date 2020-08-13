import React from "react";
import DeleteProfile from "../../components/profileDeleteModel";
import "./style.css"

function Profile() {
  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="card">
          <h1>John Doe</h1>
          <p>CEO &amp; Founder, Example</p>
          <p>Harvard University</p>
          <p>
            <DeleteProfile buttonLabel="Delete Profile"></DeleteProfile>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
