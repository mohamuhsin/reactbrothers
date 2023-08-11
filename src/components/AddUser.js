import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.PreventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label>Bro's Name</label>
      <input id="htmlFor" type="text" />
      <label>Age</label>
      <input id="htmlFor" type="text" />
      <button input="submit">Add Bro</button>
    </form>
  );
};
export default AddUser;
