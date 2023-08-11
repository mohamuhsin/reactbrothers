import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
