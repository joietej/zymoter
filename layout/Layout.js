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

const Layout = ({ children, title }) => {
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="zymoter">
              <HeaderMenuButton
                aria-label="Open menu"
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Zymoter">
                One
              </HeaderName>
              <Menu />
              <Toolbar />
              <Sidebar routes={routes} isExpanded={isSideNavExpanded} />
            </Header>
          </>
        )}
      ></HeaderContainer>
      <main className={styles.container}>
        <Grid  fullWidth style={{ height:'100%', paddingRight:'0'}}>
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
