import React from "react";
import { useRouter } from "next/router";
import PageTabs from "./PageTabs";
import PageSections from "./PageSections";

const PageContent = ({ route, windowSize, children }) => {
  const router = useRouter();
  const { tab } = router.query;
  const tabs = route?.sub || [];
  const selectedTabIndex = tabs.findIndex((r) => r.path === `/${tab}`);

  const onTabClick = (path) => {
    router.push(route.path + path);
  };

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
