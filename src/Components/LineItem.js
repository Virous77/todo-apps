import React from "react";
import "./Main.css";

import { FaTrashAlt } from "react-icons/fa";

const LineItem = (props) => {
  return (
    <li
      className={`item ${
        props.item.checked
          ? props.show
            ? "show"
            : "hide"
          : props.hide
          ? "hide"
          : "show"
      }`}
      onDoubleClick={() => props.onCheck(props.item.id)}
    >
      <div className="wrap">
        <input
          type="checkbox"
          checked={props.item.checked}
          onChange={() => props.onCheck(props.item.id)}
        />
        <label
          style={props.item.checked ? { textDecoration: "line-through" } : null}
        >
          {props.item.item}
        </label>
      </div>
      <div className="button">
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => props.onDelete(props.item.id)}
        />
      </div>
    </li>
  );
};

export default LineItem;
