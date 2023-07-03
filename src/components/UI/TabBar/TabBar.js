import React, { useState } from "react";
import styles from "./TabBar.module.scss";

const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles["tab-bar"]}>
      <div className={styles["tab-buttons"]}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? styles["active"] : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab?.title}
          </button>
        ))}
      </div>
      <div className={styles["tab-content"]}>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default TabBar;
