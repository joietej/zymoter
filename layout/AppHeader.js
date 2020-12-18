import React from "react";
import Link from "next/link";
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
} from "carbon-components-react";

import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Menu from "./Menu";

const HeaderNameLink = React.forwardRef(
  ({ href, name, prefix, onClick }, ref) => {
    return (
      <HeaderName onClick={onClick} href={href} prefix={prefix} ref={ref}>
        {name}
      </HeaderName>
    );
  }
);

const AppHeader = ({ routes, pathname, windowSize }) => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="zymoter">
            <HeaderMenuButton
              aria-label="Open menu"
              isCollapsible={windowSize.width < 1312}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <Link href="/" passHref>
              <HeaderNameLink prefix="Zymoter" name="One" />
            </Link>
            <Menu routes={routes} pathname={pathname} windowSize={windowSize} />
            <Toolbar />
            <Sidebar
              routes={routes}
              isExpanded={isSideNavExpanded}
              windowSize={windowSize}
              pathname={pathname}
            />
          </Header>
        </>
      )}
    ></HeaderContainer>
  );
};

export default AppHeader;