import React from "react";
import { Tabs, Tab } from "carbon-components-react";
import { tabsStyle } from "./styles";

const PageTabs = ({ tabs, selectedTabIndex, onTabClick, children }) => {
  return (
    <Tabs style={tabsStyle()} selected={selectedTabIndex} type="container">
      {tabs.map((t, i) => (
        <Tab
          style={{ width: `${100 / tabs.length}%` }}
          key={t.name}
          label={t.name}
          onClick={() => onTabClick(t.path)}
        >
          {i === selectedTabIndex ? (
            <div style={{ padding: "2.5rem" }}>{children} </div>
          ) : (
            <div> </div>
          )}
        </Tab>
      ))}
    </Tabs>
  );
};

export default PageTabs;
