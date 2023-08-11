import React from "react";

const Button = (props) => {
  return (
    <div>
      <button type={props.type || Button}></button>
    </div>
  );
};

export default Button;
