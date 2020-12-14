import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Grid,
  Row,
} from "carbon-components-react";

import {
  AppSwitcher20,
  Search20,
  Notification20,
} from "@carbon/icons-react";

import styles from "./Layout.module.scss";
import Sidebar from "./Sidebar";

import routes from "./routes";

const Layout = ({ children }) => {
  const action = (e) => console.log(e);

  return (
    <Grid>
      <Row style={{ maxHeight: "10vh" }}>
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="IBM Platform Name">
                <HeaderMenuButton
                  aria-label="Open menu"
                  isCollapsible
                  onClick={onClickSideNavExpand}
                  isActive={isSideNavExpanded}
                />
                <HeaderName href="#" prefix="Spectra">
                  One
                </HeaderName>
                <HeaderNavigation aria-label="IBM [Platform]">
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                  <HeaderMenu menuLinkName="Link 4" aria-label="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderNavigation>
                <HeaderGlobalBar>
                  <HeaderGlobalAction
                    aria-label="Search"
                    onClick={action("search click")}
                  >
                    <Search20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction
                    aria-label="Notifications"
                    onClick={action("notification click")}
                  >
                    <Notification20 />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction
                    aria-label="App Switcher"
                    onClick={action("app-switcher click")}
                  >
                    <AppSwitcher20 />
                  </HeaderGlobalAction>
                </HeaderGlobalBar>
                <Sidebar routes={routes} isExpanded={isSideNavExpanded}/>
              </Header>
            </>
          )}
        ></HeaderContainer>
        <Grid fullWidth>
          <Row className={styles.main}>{children}</Row>
          <Row className={styles.footer}>📢 Tejas 2020</Row>
        </Grid>
      </Row>
    </Grid>
  );
};

export default Layout;
