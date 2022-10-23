import axios from "axios";
import { useState } from "react";
import addOneContact from "../services/addContactService";
import "./AddContact.css";

const AddContact = ({ history }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = async (e) => {
    if (!contact.name || !contact.email || !contact.phone) {
      alert("Please complete the form !");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addContact">
      <form onSubmit={addContactHandler}>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={changeHandler}
            placeholder="Enter name..."
          />
        </div>

        <div className="formControl">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
            placeholder="Enter Email...."
          />
        </div>

        <div className="formControl">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={changeHandler}
            placeholder="Enter Phone..."
          />
        </div>
        <button type="submit" className="btn AddBtn">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
