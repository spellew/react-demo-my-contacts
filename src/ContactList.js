import React, {Component} from 'react';
import SingleContact from './SingleContact';
import Home from './Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class UserContact extends Component {
  constructor(){
    super();

    this.state = {
      users: [{
        name: "",
        location: ""
      }],
      favorites: [],
      listItems: [],
      mappedList: [],
      value: ''
    };
  }
  componentDidMount() {
    var myRequest = new Request(
      "https://randomuser.me/api/?results=10"
    );
    fetch(myRequest)
    .then(res => {
      // console.log("url", URL.createObjectURL(res))
      return res.json()
    })
    .then(data => {
      const users = data.results;
      users.forEach(function(user){
        user.name.full = user.name.title + " " + user.name.first + " " + user.name.last;
      });
      console.log("data", data);
      this.setState({users: users})
      console.log("users", users);
      const mappedList = users.map((user, ind) =>
      <SingleContact onClick={this.handleFavoriteClick} contact={user} id={ind} key={ind} />
      );
      this.setState({
        mappedList: mappedList,
        listItems: mappedList
      })

    })
  }
  handleQueryChange = (event) => {
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value)
  }
  handleFavoriteClick = (event) => {
    // console.log("event", event);
    // console.log("event.target", event.target);
    // console.log("event.target.parent", event.target.parentElement);
    // console.log("start state", this.state)
    var favorites = this.state.favorites.slice();
    // console.log("favorites before push", favorites);
    favorites.push(event.target.parentElement);
    console.log("favorites after push", favorites);
    this.setState({
      favorites: favorites
    })
    console.log("end state", this.state)
  }
  handleQueryClick = (event) => {
    var name = this.state.value;
    console.log(this.state.listItems);
    const queryItems = this.state.mappedList.filter(function(item) {
      // console.log(item.props.contact)
      return item.props.contact.name.full.indexOf(name) !== -1
    })
    console.log(queryItems);
    this.setState({
      listItems: queryItems
    })
  }
  handleDefaultClick = (event) => {
    this.setState({
      listItems: this.state.mappedList
    })
  }
  render() {
    return (
      <div className="UserContact">
        <div className="UserContact-header">
            <h2>Welcome React User</h2>
            <input type="search" value={this.state.value} onChange={this.handleQueryChange}/>
            <input type="submit" onClick={this.handleQueryClick}/>
            <input type="submit" onClick={this.handleDefaultClick} value="Restore Default"/>
          <hr />
        </div>
        <div>
          {this.state.listItems}
        </div>
      </div>
    );
  }
}

export default UserContact;


/*

*/
