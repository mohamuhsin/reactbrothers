import React from "react";
import classes from "./UserList.module.css";
import Card from "./Card";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul key={user.id}>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
