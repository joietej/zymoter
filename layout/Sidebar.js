import React from "react";

import { useRouter } from "next/router";
import { SideNav, SideNavItems } from "carbon-components-react";

import Routes from "./Route";

const Sidebar = ({ routes, isExpanded, windowSize }) => {
  const { pathname } = useRouter();

  return (
    <SideNav
      aria-label="Side navigation"
      isRail={windowSize.width > 672 && windowSize.width < 1312}
      expanded={isExpanded}
      isPersistent
    >
      <SideNavItems>
        <Routes
          routes={routes}
          pathname={pathname}
          onClick={() => (isExpanded = false)}
        />
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;
