import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import FullContact from './FullContact';
import ContactList from './ContactList';

class ContactRouter extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/contacts" component={ContactList}></Route>
            <Route path="/contacts/:number" component={FullContact}></Route>
        </Switch>
    );
  }
}

export default ContactRouter;