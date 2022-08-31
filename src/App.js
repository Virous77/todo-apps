import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import ButtonBar from "./Components/ButtonBar";
import AddForm from "./Components/AddForm";
import SearchItem from "./Components/Search/SearchItem";

function App() {
  const [Items, setItems] = useState(
    JSON.parse(localStorage.getItem("Shoppinglist"))
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);
  const [all, setALL] = useState(true);
  const [comp, setComp] = useState(false);
  const [clear, setClear] = useState(false);

  ////////////////List-Delete-Add ITEM//////////////////////////////////////
  const helperSaveDelete = (newItems) => {
    setItems(newItems);
    localStorage.setItem("Shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = Items.length ? Items[Items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItem = [...Items, myNewItem];
    helperSaveDelete(listItem);
  };

  const handleCheck = (id) => {
    const listItem = Items.map((item) =>
      item.id === id ? { ...item, checked: item.checked === false } : item
    );
    helperSaveDelete(listItem);
  };

  const deleteButtonHandler = (id) => {
    const deletes = Items.filter((item) => item.id !== id);
    helperSaveDelete(deletes);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!newItem) return;

    addItem(newItem);
    setNewItem("");
  };

  /////////////////////////Button-bar/////////////////////////////////
  const allDeleteHandler = () => {
    const deleteAll = Items.filter((item) => !item.id === item.checked);
    setItems(deleteAll);
    setChange(false);
    setALL(false);
    setComp(false);
    setClear(!clear);
  };
  const allShowHandler = () => {
    setHide(false);
    setShow(true);
    setChange(false);
    setALL(all);
    setComp(false);
    setClear(false);
  };

  const allActiveHandler = () => {
    setHide(false);
    setShow(false);
    setChange(!change);
    setALL(false);
    setComp(false);
    setClear(false);
  };

  const allCompHandler = () => {
    setHide(true);
    setShow(true);
    setComp(!comp);
    setChange(false);
    setALL(false);
    setClear(false);
  };

  return (
    <div className="App">
      <Header />
      <SearchItem search={search} setSearch={setSearch} />
      <AddForm
        newItem={newItem}
        setNewItem={setNewItem}
        onNewItem={SubmitHandler}
      />
      <div className="main-bar">
        <Content
          Items={Items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setItems={setItems}
          onCheck={handleCheck}
          onDelete={deleteButtonHandler}
          hide={hide}
          show={show}
        />
      </div>
      <div>
        <ButtonBar
          onAllClear={allDeleteHandler}
          onAllShow={allShowHandler}
          onActive={allActiveHandler}
          onAllComp={allCompHandler}
          onChange={allActiveHandler}
          change={change}
          onAll={allShowHandler}
          all={all}
          onComp={allCompHandler}
          comp={comp}
          onClear={allDeleteHandler}
          clear={clear}
        />
        <Footer checked={Items.length} />
      </div>
    </div>
  );
}

export default App;
