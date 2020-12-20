import React from "react";
import { useRouter } from "next/router";
import { Grid, Row } from "carbon-components-react";

import styles from "./Layout.module.scss";

import useWindowSize from "../hooks/windowSize";
import AppHeader from "./AppHeader";
import PageHeader from "./PageHeader";
import routes from "../config/routes";
import PageContent from "./PageContent";

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
            <PageContent route={route} windowSize={windowSize}>
              {children}
            </PageContent>
          </Row>
        </Grid>
      </main>
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
    </>
  );
};

export default Layout;
