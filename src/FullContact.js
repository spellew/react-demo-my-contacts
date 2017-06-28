import React, {Component} from 'react';

class FullContact extends Component {
    render() {
        if (localStorage.getItem('users')) {
            var users = JSON.parse(localStorage.getItem('users'));
            var id = parseInt(this.props.match.params.number, 10);
            var contact = users[id];
            return (
                <div>
                    <h2>{(contact.name.full)}</h2>
                    <div style={{display: "inline-block"}}>
                        <img src={contact.picture.large} alt={"contact number" + id}/>
                        {/*
                        <h1 className="UserContact-name">
                            {(contact.name.full)}
                        </h1>
                        */}
                        <p className="UserContact-number">
                            {contact.phone}
                        </p>
                        <p className="UserContact-email">
                            {contact.email}
                        </p>
                        <p className="UserContact-adress">
                            {contact.location.street}
                        </p>
                    </div>
                    <hr/>
                </div>
            );
        }
    }
}

export default FullContact
