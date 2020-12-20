import React from "react";

import { SideNav, SideNavItems } from "carbon-components-react";

import Routes from "./Routes";

const Sidebar = ({ routes, isExpanded, windowSize, pathname, onNavLinkClick }) => {
  return (
    <SideNav
      aria-label="Side navigation"
      isRail={windowSize.width > 672}
      expanded={isExpanded}
    >
      <SideNavItems>
        <Routes
          routes={routes}
          pathname={pathname}
          onClick={onNavLinkClick}
        />
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;
