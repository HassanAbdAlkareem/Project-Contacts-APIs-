import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = (props) => {
  const { updateContact } = props;
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [value, setValue] = useState("");

  const update = (e) => {
    if (form.name === "" && form.email === "") {
      setValue(() => {
        return (
          <p className="no-value">Pleace Enter the data you want to update !</p>
        );
      });
    } else {
      updateContact(form, id);
      setValue("");

      props.history.push("/");
    }
  };
  return (
    <div className="add-contact">
      <h3>Edit Contact</h3>
      <form onSubmit={update}>
        <div className="name">
          <label>Name</label>
          {value}
          <input
            autoFocus
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
          />
        </div>

        <div className="email">
          <label>Email</label>

          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
        </div>

        <div className="btn">
          <button>Update</button>
          <Link to="/">Back to List</Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
