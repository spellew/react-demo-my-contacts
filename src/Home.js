import React, {Component} from 'react';
import SingleContact from './SingleContact';
import ContactList from './ContactList';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();

    this.state = {
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <Route path="/home" component={Home}></Route>
        <Route path="/contacts" component={ContactList}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;


/*

*/
