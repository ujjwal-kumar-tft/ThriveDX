import React from "react";
import classes from "./HtmlTemplate.module.scss";

export const HtmlTemplate = ({ receiver, body, link }) => {
  return (
    <div className={classes.htmlGeneratedContainer}>
      <h1 className={classes.htmlGeneratedHeading}>Html</h1>
      <pre>{body}</pre>
    </div>
  );
};
