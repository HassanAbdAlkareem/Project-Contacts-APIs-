import React from "react";
import { Link } from "react-router-dom";
import person from "./image/person.png";
import { MdDelete, AiFillEdit } from "react-icons/all";

const ContactCard = (props) => {
  const { contact, deleteItem } = props;

  return (
    <React.Fragment>
      <div className="item">
        <div className="info">
          <div className="img-person">
            <img src={person} alt="person" />
          </div>
          <div className="p">
            <p>
              <span>Name </span>: {contact.name}
            </p>
            <p>
              <span>Email : </span>
              <Link to={`/contact/${contact.id}`}>{contact.email}</Link>
            </p>
          </div>
        </div>

        <div className="buttons">
          <div className="edit">
            <Link
              to={{
                pathname: `/edit/${contact.id}`,
                state: { contact: contact },
              }}
            >
              <AiFillEdit />
            </Link>
          </div>

          <div className="delete" onClick={() => deleteItem(contact.id)}>
            <MdDelete />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactCard;
