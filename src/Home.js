import React, {Component} from 'react';

class Home extends Component {
  sendRequest() { 
    if (!localStorage.getItem('users')) {
      var myRequest = new Request("https://randomuser.me/api/?results=10");
      fetch(myRequest).then(res => {
        return res.json()
      }).then(data => {
        const users = data.results;
        users.forEach(function (user) {
          user.name.full = user.name.title + " " + user.name.first + " " + user.name.last;
        });
        localStorage.setItem('users', JSON.stringify(users));
      });
    }
  }
  resetContacts() {
    localStorage.clear();
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <input type="button" value="Contacts Request" onClick={this.sendRequest}></input>
        <br />
        <input type="button" value="Contacts Reset" onClick={this.resetContacts}></input>
      </div>
    );
  }
}

export default Home;