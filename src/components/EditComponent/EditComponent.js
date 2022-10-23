import axios from "axios";
import { useEffect, useState } from "react";

const EditComponent = ({ history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  //   const id = match.params.id;

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const editContactHandler = async (e) => {
    if (!contact.name || !contact.email || !contact.phone) {
      alert("Please complete the form !");
      return;
    }
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3002/contacts/${match.params.id}`,
        contact
      );
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLocal = async () => {
    const { data } = await axios.get(
      `http://localhost:3002/contacts/${match.params.id}`
    );
    setContact({ name: data.name, email: data.email, phone: data.phone });
  };

  useEffect(() => {
    try {
      fetchLocal();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="addContact">
      <form onSubmit={editContactHandler}>
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
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditComponent;
