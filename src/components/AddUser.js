import React from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <Button input="submit">Add Bro</Button>
      </form>
    </Card>
  );
};
export default AddUser;
