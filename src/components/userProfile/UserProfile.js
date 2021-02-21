import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = ({username, firstName, lastName, email, initials}) => {




  return (
    <div className="profilePage">
      <div className="settingsHeader">
          <div className="userCircle">
          <p>{initials}</p>
          </div>
          <div className="pageHeading">
          Profile Settings
          </div>
      </div>
      <div className="profileSettingsForm">
        <form >
          <div className="container">
            <div className="form-group usernameField">
              <div><label>Username</label><br></br>
              <input type="text" class="form-control" name="username" value={username} disabled /></div>
            </div>
            <div className="form-group firstNameField">
              <div><label>First Name</label><br></br>
              <input type="text" class="form-control" name="firstname" value={firstName} /></div>
            </div>
            <div className="form-group lastNameField">
              <div><label>Last Name</label><br></br>
              <input type="text" class="form-control" name="lastname" value={lastName} /></div>
            </div>
            <div className="form-group emailField">
              <div><label>Email</label><br></br>
              <input
                type="email"
                class="form-control"
                name="email"
                value={email}
                onChange={() => {
                }}
              /></div>
            </div>
            <div ><button class="btn submitButton" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default UserProfile;