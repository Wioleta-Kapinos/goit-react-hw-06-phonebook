import React, {  useEffect } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export const App = () =>{
  
  const contacts = useSelector(getContacts);

  useEffect(() => {
    if (contacts !== []) {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

      return (
        <div className="App">
          <h1>Phonebook</h1>
            <ContactForm />
          <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
      )
}