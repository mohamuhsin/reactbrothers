import React, { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const nameHandler = () => {
    setName();
  };
  const ageHandler = () => {
    setAge();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={name} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={age} />
        <Button input="submit">Add Bro</Button>
      </form>
    </Card>
  );
};
export default AddUser;
