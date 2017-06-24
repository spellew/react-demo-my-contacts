import React from 'react';

function SingleContact({ contact, onClick, id }) {
  return (
    <div onClick={onClick} id={id}>
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
      <hr />
    </div>
  )
}

export default SingleContact
