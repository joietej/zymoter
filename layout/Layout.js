import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";

import routes from "../config/routes";

import useWindowSize from "../hooks/windowSize";
import useRoutes from "../hooks/routes";

import AppHeader from "./header/AppHeader";
import PageHeader from "./page/PageHeader";
import PageContent from "./page/PageContent";
import CheckoutDialog from "./checkout/Dialog";
import LoginDialog from "./login/Dialog";
import AppNotification from "./notifications/AppNotification";

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
      <span className={styles.homepage} />
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
      <AppNotification />
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
      <CheckoutDialog />
      <LoginDialog />
    </>
  );
};

export default Layout;
