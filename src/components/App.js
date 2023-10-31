import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PakingList from "./PakingList";
import Stats from "./Stats";

const App = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = (item) => {
    setItem((items) => [...items, item]);
  };

  const deleteItemHandler = (id) => {
    setItem((items) => items.filter((item) => item.id !== id));
  };

  const toggleItemHandler = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearListHandler = () => {
    // setItem((items) => items.filter((item) => !item));
    if (window.confirm("Are you sure to delete all items?")) setItem([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItemHandler} />
      <PakingList
        items={item}
        onDeleteItem={deleteItemHandler}
        onToggleItem={toggleItemHandler}
        onClearList={clearListHandler}
      />
      <Stats items={item} />
    </div>
  );
};

export default App;
