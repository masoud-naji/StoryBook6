import React from "react";
import "./Input.css";
function Input(props) {
  const { size, children, ...rest } = props;
  return (
    <input className={`input ${size}`} {...rest}>
      {children}
    </input>
  );
}
export default Input;
