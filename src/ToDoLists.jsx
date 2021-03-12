import React from 'react';
import "./App.css";
const ToDoLists = (props) =>{

  
    return ( 
        <> 
        <div className="todo_style">
            <i className="fa fa-close" aria-hidden="true" onClick={() =>{
                props.onSelect(props.id);
            }}/>
    <li className="listdeco">{props.text}</li>
    </div>
    </>
    );
}
export default ToDoLists;