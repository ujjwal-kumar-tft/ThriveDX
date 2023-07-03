import React from "react";
import classes from "./Card.module.scss";
const Card = ({
  children,
  className,
  overrideBodyClassName,
  onClick,
  style,
}) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={`${classes.container} ${className}`}
    >
      <div className={`${classes.containerBody} ${overrideBodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;
