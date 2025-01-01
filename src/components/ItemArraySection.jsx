import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useState } from "react";

function ItemArraySection({ title, data, setData, fields, emptyItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(data);
  };

  const handleSave = () => {
    setData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(data);
  };

  const handleAdd = () => {
    setEditedData([
      ...editedData,
      {
        id: uuidv4(),
        ...emptyItem,
      },
    ]);
  };

  const handleChange = (id, field, value) => {
    setEditedData(
      editedData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <section>
      <h2>{title}</h2>
      {!isEditing ? (
        <div className="display-mode">
          {data.map((item) => (
            <div key={item.id}>
              {fields.map((field) => (
                <p key={field.key}>
                  <strong>{field.label}:</strong> {item[field.key]}
                </p>
              ))}
            </div>
          ))}
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      ) : (
        <div className="edit-mode">
          {editedData.map((item) => (
            <div key={item.id}>
              {fields.map((field) => (
                <div key={field.key}>
                  <label>
                    {field.label}:
                    <input
                      type="text"
                      value={item[field.key]}
                      onChange={(e) =>
                        handleChange(item.id, field.key, e.target.value)
                      }
                    />
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button type="button" onClick={handleAdd}>
            Add
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </section>
  );
}

ItemArraySection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  setData: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  emptyItem: PropTypes.object.isRequired,
};

export default ItemArraySection;
