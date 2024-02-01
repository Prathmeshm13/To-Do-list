import React from "react";
import List from "./List";
import listitem from "../array";
function createitem(item) {
  return <List key={item.id} item={item.item} />;
}
function App() {
  const [input, setInput] = React.useState("");
  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }
  function handleSubmit() {
    listitem.push({
      id: listitem.length + 1,
      item: input,
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{listitem.map(createitem)}</ul>
      </div>
    </div>
  );
}

export default App;
