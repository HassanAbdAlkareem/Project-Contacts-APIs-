import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteItem }) => {
  return (
    <div className="contant-list">
      <div className="title">
        <h2>Contact List</h2>
        <Link to="/add">
          <button>Add Contact</button>
        </Link>
      </div>
      {contacts.length === 0 ? (
        <p style={{ margin: "1rem 0" }}>Empty list ..</p>
      ) : (
        contacts.map((contact, index) => {
          return (
            <ContactCard
              deleteItem={deleteItem}
              contact={contact}
              key={index}
            />
          );
        })
      )}
    </div>
  );
};

export default ContactList;
