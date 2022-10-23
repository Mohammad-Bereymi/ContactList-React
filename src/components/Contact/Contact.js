import { VscAccount, VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Contact = ({ deleteHandler, contact }) => {
  const { name, email, phone, id } = contact;
  return (
    <div className="contact" key={id}>
      <div className="contactList_desc">
        <VscAccount className="profileIcons" />
        <div>
          <p className="description">
            <span style={{ fontWeight: "600", marginRight: "2px" }}>Name:</span>
            {name}
          </p>
          <p className="description">
            <span style={{ fontWeight: "600", marginRight: "2px" }}>
              Email:
            </span>
            {email}
          </p>
          <p className="description">
            <span style={{ fontWeight: "600", marginRight: "2px" }}>
              Phone:
            </span>
            {phone}
          </p>
        </div>
      </div>
      <div className="contactList_handler">
        <Link to={`/edit/${id}`}>
          <button className="btn">Edit</button>
        </Link>
        <VscTrash className="trashIcon" onClick={() => deleteHandler(id)} />
      </div>
    </div>
  );
};

export default Contact;
