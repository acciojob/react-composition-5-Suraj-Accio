import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const App = () => {
  const tabs1 = [
    { title: "Tab 1", content: <p>Content for Tab 1</p> },
    { title: "Tab 2", content: <p>Content for Tab 2</p> },
    { title: "Tab 3", content: <p>Content for Tab 3</p> }
  ];

  const tabs2 = [
    { title: "Tab A", content: <p>Content for Tab A</p> },
    { title: "Tab B", content: <p>Content for Tab B</p> },
    { title: "Tab C", content: <p>Content for Tab C</p> }
  ];

  return (
    <div>
      <Tabs tabs={tabs1} key="tabs1" />
      <Tabs tabs={tabs2} key="tabs2" />
    </div>
  );
};

export default App;