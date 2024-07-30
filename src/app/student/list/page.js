"use client"
import React from 'react'
import { useSelector } from 'react-redux';


function StudentList() {
  const userData = useSelector((data) => data.userData.users);


  return (
    <>
      <h3 className='text-center'>Student List</h3>
      <div>
        <ul>
          {userData.map((user, i) => 
            <li key={i}>{user.name}</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default StudentList