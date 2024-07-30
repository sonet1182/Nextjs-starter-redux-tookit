"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/toDoSlice";

function AddToDo() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();


  const todoDispatch = () => {
    dispatch(addToDo(title));
  }

  return (
    <div className="add-user">
      <h3>Add ToDo</h3>
      <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} />
      <button onClick={todoDispatch}>Add</button>
    </div>
  );
}

export default AddToDo;
