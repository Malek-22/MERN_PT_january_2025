import React from "react";
import "./App.css";
import Tabs from "./component/Tabs";

const App = () => {
  const tabsData = [
    { label: "Tab 1", content: "This is content for Tab 1." },
    { label: "Tab 2", content: "This is content for Tab 2." },
    { label: "Tab 3", content: "This is content for Tab 3." },
  ];

  return (
    <div className="App">
      <h1>Tabs Component</h1>
      <Tabs items={tabsData} />
    </div>
  );
};

export default App;
