import React from "react";
import "./Main.css";
import ItemList from "./ItemList";

const Content = (props) => {
  return (
    <main className="main">
      {props.Items.length > 0 ? (
        <ItemList
          hide={props.hide}
          show={props.show}
          Items={props.Items}
          setItems={props.setItems}
          onCheck={props.onCheck}
          onDelete={props.onDelete}
        />
      ) : (
        <p className="empty-msg">No Items found!!!</p>
      )}
    </main>
  );
};

export default Content;
