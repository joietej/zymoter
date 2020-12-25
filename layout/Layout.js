import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./Layout.module.scss";

import { InlineNotification, NotificationActionButton } from "carbon-components-react";

import routes from "../config/routes";

import useWindowSize from "../hooks/windowSize";
import useRoutes from "../hooks/routes";
import { useAppNotification } from "../hooks/state/notifications";

import AppHeader from "./header/AppHeader";
import PageHeader from "./page/PageHeader";

import PageContent from "./page/PageContent";

const Layout = ({ children }) => {
  const { route, subRoute, pathname, tab, onTabClick } = useRoutes();
  const [appNotification, _] = useAppNotification();
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
      {appNotification && (
        <InlineNotification style={{justifyContent:'center'}}
          title={appNotification.title || "Notification"}
          subtitle={appNotification.subtitle || ""}
          kind={appNotification.kind || "info-square"}
          onCloseButtonClick={appNotification.onClose}
          actions={
            <NotificationActionButton onClick={appNotification.onAction}>
              {appNotification.actionText || "Action"}
            </NotificationActionButton>
          }
        ></InlineNotification>
      )}
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
    </>
  );
};

export default Layout;
