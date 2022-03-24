import React from "react";

import { SideNav, SideNavItems } from "carbon-components-react";

import RoutesContainer from "../routes/RoutesContainer";

const Sidebar = ({
  routes,
  isExpanded,
  windowSize,
  pathname,
  onNavLinkClick,
}) => {
  return (
    <SideNav
      aria-label="Side navigation"
      isRail={windowSize.width > 768}
      expanded={isExpanded}
      onOverlayClick={onNavLinkClick}
    >
      <SideNavItems>
        <RoutesContainer
          routes={routes}
          pathname={pathname}
          onClick={onNavLinkClick}
        />
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;
