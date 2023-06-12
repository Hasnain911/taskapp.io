/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png"
import CheckIcon from "../assets/checkicon.png"
import "./todo.css"

export const TodoItem = ({title, deleteTodo}) =>{
  const [done, setDone] = useState(false);
  const whenClicked = () => {
    setDone(!done);
  };
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title" style={{ backgroundColor: done ? "#56fca2" : "white" }}>{title}</p>
      <img className="check-icon" src={CheckIcon} onClick={whenClicked}/>
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
    </div>
  )
}

