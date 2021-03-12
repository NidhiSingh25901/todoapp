
import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';
function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    setItems((previousItems) => {
      return [...previousItems, inputList];
    })
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleetd");
    setItems((previousItems)=>{
      return previousItems.filter((arrElem, index)=>{
        return index !== id;

      })
    })
}
  return (
    <div className="main_div">
      <h1 className="head">Daily Todo Lists</h1>
      <div className="center_div">
        <br />
        <h1 className="head">ToDo App</h1>
        <br />
        <div className="input">
          <input type="text" value={inputList} placeholder="Add List Item" onChange={itemEvent} />
          <button onClick={listofItems} className="btn1"> + </button>
        </div>
        <div className="list1">

          <ol className="list">
            {items.map((itemval, index) => {
             return <ToDoLists 
                 key={index}
                 id={index}
                 text= {itemval}
                 onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>

    </div>
  );
}

export default App;
