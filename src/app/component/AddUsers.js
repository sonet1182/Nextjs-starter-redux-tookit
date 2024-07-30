"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

function AddUsers() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const userDispatch = () => {
    dispatch(addUser(name));
    setName("");
  };

  return (
    <div className="add-user">
      <h4>Add Users</h4>
      <input
        type="text"
        placeholder="Add new User"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={userDispatch}
      >
        Add
      </button>
    </div>
  );
}

export default AddUsers;
