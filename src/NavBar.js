import React, {Component} from 'react';
import {NavLink, BrowserRouter, Route, Switch} from 'react-router-dom';
import ContactRouter from './ContactRouter';
import Home from './Home';

class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <nav>
              <ul>
                <li><NavLink exact activeStyle={{color: "black"}} to="/">Home</NavLink></li>
                <li><NavLink exact activeStyle={{color: "black"}} to="/contacts">Contacts</NavLink></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/contacts" component={ContactRouter}></Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavBar;