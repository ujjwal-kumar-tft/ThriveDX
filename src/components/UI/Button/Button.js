import React, { useState } from "react";
import styles from "./Button.module.scss";

const Button = ({ onClick, overrideClassName, disabled, buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      setIsClicked(true);
      onClick();
    }
  };

  return (
    <div
      style={{
        backgroundColor: disabled ? "gray" : "",
        outline: isClicked ? "2px solid red" : "",
        color: isClicked ? "#000" : "",
      }}
      className={`${styles.button} ${overrideClassName}`}
      onClick={handleClick}
    >
      {buttonText}
    </div>
  );
};

export default Button;