import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-header ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          flex-direction: column;
        }
        .tabs-header {
          display: flex;
          justify-content: space-between;
          background-color: #1a1a1b;
          color: white;
          padding: 0.5rem;
          border-radius: 4px 4px 0 0;
        }
        .tab-header {
          cursor: pointer;
          padding: 0.5rem;
        }
        .tab-header.active {
          border-bottom: 2px solid white;
          font-weight: bold;
        }
        .tab-content {
          padding: 1rem;
          background-color: #2a2a2e;
          border-radius: 0 0 4px 4px;
        }
        .tab-pane {
          display: none;
        }
        .tab-pane.active {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
