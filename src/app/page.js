'use client'
import Image from "next/image";
import AddUsers from "./component/AddUsers";
import DisplayUser from "./component/DisplayUsers";
import AddToDo from "./component/AddToDo";
import DisplayToDo from "./component/DisplayToDo";
import { useSelector } from "react-redux";


export default function Home() {

  const userData = useSelector((data) => data.userData.users);

  return (
    <main>
      <h1 className="text-center">I am Home page</h1>

      <div>
        List of user

        <ul>
          {userData.map((user, i) => 
            <li key={i}>{user.name}</li>
          )}
        </ul>

      </div>

      <AddUsers/>
      <DisplayUser/>

      <hr></hr>

      <AddToDo/>
      <DisplayToDo/>
    </main>
  );
}
