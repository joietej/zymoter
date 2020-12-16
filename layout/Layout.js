import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  Grid,
  Row,
} from "carbon-components-react";

import styles from "./Layout.module.scss";

import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Menu from "./Menu";

import routes from "./routes";
import PageHeader from "./PageHeader";

import useWindowSize from "../hooks/windowSize";

const Layout = ({ children, title }) => {
  const windowSize = useWindowSize();
  return (
    <>
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
              <HeaderName href="#" prefix="Zymoter">
                One
              </HeaderName>
              <Menu />
              <Toolbar />
              <Sidebar routes={routes} isExpanded={isSideNavExpanded} windowSize={windowSize} />
            </Header>
          </>
        )}
      ></HeaderContainer>
      <main className={styles.container}>
        <Grid
          fullWidth
          style={{ height: "100%", paddingRight: "0", paddingLeft: "0" }}
        >
          <Row className={styles.banner}>
            <PageHeader title={title} />
          </Row>
          <Row className={styles.main}>{children}</Row>
        </Grid>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Layout;
