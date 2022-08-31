import React from "react";
import { FaPlus } from "react-icons/fa";
import "./AddForm.css";

const AddForm = ({ newItem, setNewItem, onNewItem }) => {
  return (
    <form className="add-form" onSubmit={onNewItem}>
      <label htmlFor="addItem">Add Item</label>
      <div className="center">
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="Add Item.."
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button type="submit" aria-label="Add-Item" className="add">
          <FaPlus />
        </button>
      </div>
    </form>
  );
};

export default AddForm;
