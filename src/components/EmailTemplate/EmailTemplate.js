import React from "react";
import classes from "./EmailTemplate.module.scss";

export const EmailTemplate = ({ subject, receiver, body, link }) => {
  return (
    <>
      <div className={classes.emailGeneratedContainer}>
        <h1 className={classes.emailGeneratedHeading}>Email</h1>
        <h3 className={classes.emailGeneratedSubject}>Subject: {subject}</h3>
        <pre>{body}</pre>
      </div>
    </>
  );
};
