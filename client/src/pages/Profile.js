import React from 'react'
import DeleteProfile from '../components/profileDeleteModel'

function Profile () {
    return (
        <div className="container-fluid">
  <div className="col-md">
      <p>
          <DeleteProfile buttonLabel = "Delete Profile"/>
      </p>
  </div>
</div>

    )
}
export default Profile