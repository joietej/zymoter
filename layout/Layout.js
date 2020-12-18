import React from "react";
import { useRouter } from "next/router";
import { Grid, Row } from "carbon-components-react";

import styles from "./Layout.module.scss";

import useWindowSize from "../hooks/windowSize";

import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";
import PageTabs from "../components/PageTabs";
import routes from "../config/routes";

const Layout = ({ routeName, title, children }) => {
  const route = routes.find((r) => r.name === routeName);
  const { pathname } = useRouter();
  const windowSize = useWindowSize();

  return (
    <>
      <AppHeader routes={routes} pathname={pathname} windowSize={windowSize} />
      <main className={styles.container}>
        <Grid
          fullWidth
          style={{ height: "100%", paddingRight: "0", paddingLeft: "0" }}
        >
          <Row className={styles.pageHeader}>
            <PageHeader title={title} />
          </Row>
          <Row className={styles.main}>
            <PageTabs route={route}>{children}</PageTabs>
          </Row>
        </Grid>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default Layout;
