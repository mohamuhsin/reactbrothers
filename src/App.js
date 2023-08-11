import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
