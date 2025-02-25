import React, { useState } from "react";

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/*Tab Headers */}
      <div className="tabs">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? "active" : ""}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {items[activeTab] && <div>{items[activeTab].content}</div>}
      </div>
    </div>
  );
};

export default Tabs;
