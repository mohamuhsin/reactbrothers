import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" />
      <button input="submit">Add Bro</button>
    </form>
  );
};
export default AddUser;
