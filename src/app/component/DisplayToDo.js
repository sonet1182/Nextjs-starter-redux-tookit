"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../redux/toDoSlice";

function DisplayToDo() {
  const todoData = useSelector((data) => data.todoData.todos);
  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h3 className="text-center">DisplayToDo</h3>

      <ul>
        {todoData.map((data, i) => (
          <li key={i}>
            {data.title}
            <button
              className="btn-danger"
              onClick={() => dispatch(removeToDo(data?.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayToDo;
