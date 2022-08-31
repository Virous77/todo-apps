import React from "react";
import "./Main.css";
import LineItem from "./LineItem";

const ItemList = (props) => {
  return (
    <ul>
      {props.Items.map((item) => (
        <LineItem
          onCheck={props.onCheck}
          onDelete={props.onDelete}
          item={item}
          hide={props.hide}
          show={props.show}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
