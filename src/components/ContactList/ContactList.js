import axios from "axios";
import { useEffect, useState } from "react";
import "./ContactList.css";
import Contact from "../Contact/Contact";
import getContacts from "../services/getContactsService";
import deleteContact from "../services/deleteContactsService";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    try {
      const { data } = await getContacts();
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  const deleteHandler = async (id) => {
    const filterContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filterContacts);
    await deleteContact(id);
  };

  return (
    <section className="listWrapper">
      <div className="header">
        <h2>ContactsList</h2>
        <Link to="/addContact">
          <button className="btn">Add</button>
        </Link>
      </div>
      <div className="contactList">
        {contacts ? (
          contacts.map((contact) => (
            <Contact
              deleteHandler={deleteHandler}
              contact={contact}
              key={contact.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
