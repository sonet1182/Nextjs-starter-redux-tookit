"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function DisplayUser() {
  const userData = useSelector((data) => data.userData.users);
  const dispatch = useDispatch();

  return (
    <div className="display-user">
      <h4>Display User</h4>
      <ul>
        {userData.map((user, i) => (
          <li key={i}>{user.name} 
          <button className="btn-danger" onClick={() => dispatch(removeUser(user?.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayUser;
