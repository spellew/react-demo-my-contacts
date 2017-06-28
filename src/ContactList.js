import React, {Component} from 'react';
import MiniContact from './MiniContact';

class ContactList extends Component {
  constructor() {
    super();

    this.state = {
      favorites: [],
      listItems: [],
      mappedList: [],
      value: '',
      alphabet: [],
      reverse: []
    };
  }
  componentDidMount() {
    if (localStorage.getItem('users')) {
      var users = JSON.parse(localStorage.getItem('users'));
      const mappedList = users.map((user, ind) => <MiniContact
        onClick={this.handleFavoriteClick}
        contact={user}
        id={ind}
        key={ind}/>);
      this.setState({mappedList: mappedList, listItems: mappedList});  
    }
  }
  handleFavoriteClick = (event) => {
    var element = null;
    var favorites = this.state.favorites.slice();
    var mappedList = this.state.mappedList.slice();
    var eClass = event.target.className;
    mappedList.forEach(function (each) {
      if (each.props.contact.name.full === event.target.parentNode.nextSibling.firstChild.innerHTML) {
        element = each;
        return;
      }
    });
    if (eClass.search("fa-star-o") !== -1) {
      event.target.className = eClass.replace("fa-star-o", "fa-star");
      if (favorites.indexOf(element) === -1) {
        favorites.push(element);
      }
    } else {
      event.target.className = eClass.replace("fa-star", "fa-star-o");
      favorites.splice(favorites.indexOf(element), 1);
    }
    this.setState({favorites: favorites});
    if (this.state.listItems === this.state.favorites) {
      this.setState({listItems: favorites});
    }
  }
  handleQueryClick = (event) => {
    var query = this.state.value;
    var type = event.target.parentNode.children[2].value;
    const queryItems = this.state.listItems.filter(function (item) {
      if (type === "full") {
        return item.props.contact.name[type].indexOf(query) !== -1
      } else if (type === "street") {
        return item.props.contact.location[type].indexOf(query) !== -1
      } else {
        return item.props.contact[type].indexOf(query) !== -1;
      }
    });
    this.setState({listItems: queryItems})
  }
  handleQueryChange = (event) => {
    this.setState({value: event.target.value})
  }
  handleDefaultClick = (event) => {
    this.setState({listItems: this.state.mappedList});
    this.setState({value: ""});
  }
  handleDisplayClick = (event) => {
    this.setState({listItems: this.state.favorites});
  }
  handleAlphabetSort = (reverse) => (event) => {
  	var alphabet = this.state.listItems.slice();
    alphabet.sort(function(a, b) {
      var aName = a.props.contact.name.first, bName = b.props.contact.name.first;
      if (reverse) {
        return aName > bName ? -1 : 1;
      } else {
        return aName < bName ? -1 : 1;
      }   
    });
    this.setState({listItems: alphabet});
  }
  render() {
    return (
      <div className="UserContact">
        <div className="UserContact-header">
          <h2>Welcome React User</h2>
          <input type="button" onClick={this.handleDisplayClick} value="Favorites"/>
          |
          <select name="searchType" onChange={this.handleSelectChange} value={this.state.search}>
            <option value="full">Name</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="street">Address</option>
          </select>
          <input
            type="search"
            value={this.state.value}
            onChange={this.handleQueryChange}/>
          <input type="button" onClick={this.handleQueryClick} value="Search"/>
          <input type="reset" onClick={this.handleDefaultClick} value="Restore Default"/>
          |
          <input
            type="button"
            onClick={this.handleAlphabetSort(false)}
            value="Sort Alphabetically"/>
          |
          <input
            type="button"
            onClick={this.handleAlphabetSort(true)}
            value="Reverse Sort"/>
          <hr/>
        </div>
        <div>
          {this.state.listItems}
        </div>
      </div>
    );
  }
}

export default ContactList;