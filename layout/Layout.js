import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./Layout.module.scss";

import useWindowSize from "../hooks/windowSize";
import AppHeader from "./header/AppHeader";
import PageHeader from "./page/PageHeader";
import routes from "../config/routes";
import PageContent from "./page/PageContent";
import useRoutes from "../hooks/routes";

const Layout = ({ children }) => {
  const { route, subRoute, pathname, tab, onTabClick } = useRoutes();
  const windowSize = useWindowSize();

  return (
    <>
      <Head>
        <title>{`Zymoter - ${route.name} ${subRoute?.name || ""}`}</title>
      </Head>
      <AppHeader routes={routes} pathname={pathname} windowSize={windowSize} />
      <main className={styles.container}>
        <div className={styles.pageHeader}>
          <PageHeader route={route} subRoute={subRoute} />
        </div>
        <div className={styles.main}>
          <PageContent
            route={route}
            tab={tab}
            windowSize={windowSize}
            onTabClick={onTabClick}
          >
            {children}
          </PageContent>
        </div>
      </main>
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
    </>
  );
};

export default Layout;
