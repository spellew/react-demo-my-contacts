import React from 'react';
import FontAwesome from 'react-fontawesome';
import {NavLink} from 'react-router-dom';

function MiniContact({ contact, onClick, id }) {
  return (
    <span id={id}>
      <div style={{display: "inline-block"}}>
          <FontAwesome name='star-o' size='2x' style={{color: "#FFD700", textShadow: "-2.5px -2.5px 0 #000", verticalAlign: "middle", paddingRight: "2vw", paddingLeft: "1vw" }} onClick={onClick}/>
      </div>
      <div style={{display: "inline-block"}}>
      <p className="UserContact-name">
        {(contact.name.full)}
      </p>
      <p className="UserContact-number">
        {contact.phone}
      </p>
      <p className="UserContact-email">
        {contact.email}
      </p>
      <p className="UserContact-adress">
        {contact.location.street}
      </p>
       <div>
      <NavLink data-params={{contact}} to={"/contacts/" + id}>More...</NavLink>
      </div>
      </div>
      <hr />
    </span>
  );
}

export default MiniContact
