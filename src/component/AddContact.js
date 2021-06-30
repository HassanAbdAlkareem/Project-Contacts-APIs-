import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = (props) => {
  const { addItem } = props;
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [value, setValue] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (form.name === "" || form.email === "") {
      setValue(() => {
        return <p className="no-value">Pleace enter data !</p>;
      });
    } else {
      addItem(form);
      setValue("");
      setForm({
        name: "",
        email: "",
      });
      props.history.push("/");
    }
  };
  return (
    <div className="add-contact">
      <h3>Add Contact</h3>
      <form onSubmit={add}>
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
          <button>Add</button>
          <Link to="/">Back to List</Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
