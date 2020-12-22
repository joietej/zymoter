import React from "react";
import { useRouter } from "next/router";
import PageTabs from "./PageTabs";
import PageSections from "./PageSections";

const PageContent = ({ route, tab, windowSize, onTabClick, children }) => {
  const tabs = route?.sub || [];
  const selectedTabIndex = tabs.findIndex((r) => r.path === `/${tab}`);

  return (
    <>
      {tabs.length > 0 && selectedTabIndex > -1 ? (
        windowSize.width > 1312 ? (
          <PageTabs
            tabs={tabs}
            selectedTabIndex={selectedTabIndex}
            onTabClick={onTabClick}
          >
            {children}
          </PageTabs>
        ) : (
          <PageSections
            sections={tabs}
            selectedSectionIndex={selectedTabIndex}
            onSectionClick={onTabClick}
            windowSize={windowSize}
          >
            {children}
          </PageSections>
        )
      ) : (
        children
      )}
    </>
  );
};

export default PageContent;
