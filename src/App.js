import React from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
