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
              <input type="text" className="form-control" name="username" defaultValue={username} disabled /></div>
            </div>
            <div className="form-group firstNameField">
              <div><label>First Name</label><br></br>
              <input type="text" className="form-control" name="firstname" defaultValue={firstName} /></div>
            </div>
            <div className="form-group lastNameField">
              <div><label>Last Name</label><br></br>
              <input type="text" className="form-control" name="lastname" defaultValue={lastName} /></div>
            </div>
            <div className="form-group emailField">
              <div><label>Email</label><br></br>
              <input
                type="email"
                className="form-control"
                name="email"
                defaultValue={email}
              /></div>
            </div>
            <div ><button className="btn submitButton" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default UserProfile;
