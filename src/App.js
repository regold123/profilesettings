import React from "react";
import './App.css';
import users from "./users/users.js";
import Header from "./components/header/Header"
import UserProfile from "./components/userProfile/UserProfile"

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      }
  }


  loadUsers() {
    this.setState({
      userId: users[0].userId,
      username: users[0].username,
      firstName: users[0].firstName,
      lastName: users[0].lastName,
      email: users[0].email,
    });
    this.getInitials(users[0].firstName, users[0].lastName);
  }

  getInitials(firstName, lastName) {
    var firstInitial = firstName.slice(0,1);
    var secondInitial = lastName.slice(0,1);
    var initials = firstInitial + secondInitial
    this.setState({
      initials: initials,
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    const userId = this.state.userId;
    const username = this.state.username;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const initials = this.state.initials;

    return (
      <div className="App">
        <Header
          name={firstName}
        />

        <UserProfile
          username={username}
          firstName={firstName}
          lastName={lastName}
          email={email}
          initials={initials}
        />
      </div>
    );
  }
}

export default App;
