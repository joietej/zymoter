import React from "react";
import { useRouter } from "next/router";
import { Grid, Row } from "carbon-components-react";

import styles from "./Layout.module.scss";

import useWindowSize from "../hooks/windowSize";
import ErrorPage from "next/error";
import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";
import PageTabs from "./PageTabs";
import routes from "../config/routes";

const Layout = ({ children }) => {
  const router = useRouter();
  const { page = "", tab } = router.query;
  const { pathname } = router;

  let route = routes.find((r) => r.path === `/${page}`) || routes[0];

  if (pathname === "/_error") {
    route = { path: "/_error", name: "Error" };
  }

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
            <PageHeader title={route.name} />
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
