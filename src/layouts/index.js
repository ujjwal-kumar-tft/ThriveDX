import React from "react";
import classes from "./MainLayout.module.scss";
import PhishingEmailGenerator from "../pages/PhishingEmailGenerator";
export const MainLayout = () => {
  return (
    <div className={classes.mainLayout}>
      <PhishingEmailGenerator />
    </div>
  );
};

export default MainLayout;
