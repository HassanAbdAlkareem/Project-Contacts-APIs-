import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import User from "./image/person.png";

const SingleContact = ({ FindToIndex }) => {
  const { id } = useParams();
  const SingleContact = FindToIndex(id);

  if (SingleContact === undefined) {
    return (
      <h2 style={{ textAlign: "center", margin: "3rem 0" }}>Not Found .</h2>
    );
  }

  const { name, email } = SingleContact;

  return (
    <div className="single-contact">
      <div className="container-single">
        <img src={User} alt="person" />

        <div className="info">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
        </div>
      </div>
      <Link to="/">
        <button>Back to Contact List</button>
      </Link>
    </div>
  );
};

export default SingleContact;
