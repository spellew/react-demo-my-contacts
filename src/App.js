import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

class UserContact extends Component {
  constructor(){
    super();

    this.state = {
      users: [{
        name: "",
        location: ""
      }]
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      const users = data.results;
      this.setState({users: users})
      console.log(users);
    })
  }
  render() {
    return (
      <div className="UserContact">
        <div className="UserContact-header">
          <h2>Welcome React User</h2>
        </div>
        <p className="UserContact-name">
          {console.log("this", this)}
          {this.state.users[0].name.title + " " + this.state.users[0].name.first + " " + this.state.users[0].name.last}
        </p>
        <p className="UserContact-number">
          {this.state.users[0].phone}
        </p>
        <p className="UserContact-email">
          {this.state.users[0].email}
        </p>
        <p className="UserContact-adress">
          {this.state.users[0].location.street}
        </p>
      </div>
    );
  }
}

export default UserContact;
