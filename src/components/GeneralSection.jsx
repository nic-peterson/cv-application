import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/GeneralSection.css";

function GeneralSection({ data, setData }) {
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <h2>General Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="Phone"
            value={data.phone}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            name="address"
            id="address"
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-mode">
          <p>
            <strong>Name:</strong>
            {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

GeneralSection.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default GeneralSection;
