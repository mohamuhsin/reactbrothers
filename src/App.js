import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UsersList";

function App() {
  const [userList, setUserList] = useState[""];

  const AddUserHandler = () => {
    setUserList();
  };
  return (
    <div>
      <AddUser />
      <UserList users={userList} />
    </div>
  );
}

export default App;
