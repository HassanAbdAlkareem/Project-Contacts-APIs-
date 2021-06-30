import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axiosApi from "./axiosApi";

//
import "./app.css";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import SingleContact from "./SingleContact";
import EditContact from "./EditContact";
import Header from "./Header";
import { Contacts } from "./data";

const AppJsonServer = () => {
  // if i have real api
  // const [contacts, setContacts] = useState(Contacts);

  // i create file data beacuse i dont have real api
  const [contacts, setContacts] = useState(Contacts);
  //
  const getAxiosApi = async () => {
    //
    try {
      const response = await axiosApi.get("/contacts");
      if (response.status === 200) {
        setContacts(response.data);
      }
    } catch (error) {
      console.log("this is error :", error);
    }
  };

  useEffect(() => {
    getAxiosApi();
  }, []);

  const addItem = async (addValue) => {
    console.log(addValue);
    // i use this function if i have i real api
    // const response = await axiosApi.post("/contacts", { ...addValue });
    // setContacts([...contacts, response.data]);

    setContacts([...contacts, addValue]);
  };

  const deleteItem = async (id) => {
    // i use this function if i have i real api
    // await axiosApi.delete(`/contacts/${id}`);

    const deleteItem = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(deleteItem);
  };

  const FindToIndex = (id) => {
    const TempContact = contacts.find((item) => item.id == id);

    return TempContact;
  };
  const updateContact = async (updateValue, id) => {
    // i use this function if i have i real api
    // const response = await axiosApi.put(`/contacts/${id}`, updateValue);
    // setContacts(
    //   contacts.map((contact) =>
    //     contact.id == id ? { ...response.data } : contact
    //   )
    // );

    setContacts(
      contacts.map((contact) =>
        contact.id == id ? { ...updateValue } : contact
      )
    );
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ContactList contacts={contacts} deleteItem={deleteItem} />
          </Route>

          <Route
            path="/add"
            render={(props) => <AddContact {...props} addItem={addItem} />}
          ></Route>

          <Route
            path="/edit/:id"
            render={(props) => (
              <EditContact
                {...props}
                updateContact={updateContact}
                FindToIndex={FindToIndex}
              />
            )}
          ></Route>

          <Route path="/contact/:id">
            <SingleContact FindToIndex={FindToIndex} />
          </Route>
          <Route path="*">
            <h4>Not Found ... This url is False</h4>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppJsonServer;

// if i want add data to loacal storgae

//   const LOCAL_STORAGE_KEY = "contacts";
// useEffect(() => {
//   const returnContactsFromLocalStorage = JSON.parse(
//     localStorage.getItem(LOCAL_STORAGE_KEY)
//   );
//   if (returnContactsFromLocalStorage)
//     setContacts(returnContactsFromLocalStorage);
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
// }, [contacts]);
