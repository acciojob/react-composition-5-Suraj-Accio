import React, { useState } from "react";

const Tabs = ({ tabs, defaultIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <ul className="tabs-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;