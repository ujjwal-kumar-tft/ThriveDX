import React from "react";

const ErrorMessage = ({ error, overrideErrorClassName }) => {
  if (!error) return null;

  return (
    <div className={overrideErrorClassName}>
      <span>{error}</span>
    </div>
  );
};

export default ErrorMessage;
