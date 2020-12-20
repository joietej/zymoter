import React from "react";
import { useRouter } from "next/router";

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
        <div className={styles.pageHeader}>
          <PageHeader title={route.name} />
        </div>
        <div className={styles.main}>
          <PageContent route={route} windowSize={windowSize}>
            {children}
          </PageContent>
        </div>
      </main>
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
    </>
  );
};

export default Layout;
