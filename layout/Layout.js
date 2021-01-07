import React from "react";
import Head from "next/head";
import styles from "./Layout.module.scss";

import {
  InlineNotification,
  Modal,
  NotificationActionButton,
} from "carbon-components-react";

import routes from "../config/routes";

import useWindowSize from "../hooks/windowSize";
import useRoutes from "../hooks/routes";
import { useAppNotification } from "../hooks/state/notifications";

import AppHeader from "./header/AppHeader";
import PageHeader from "./page/PageHeader";
import PageContent from "./page/PageContent";
import Dialog from "./checkout/Dialog";

const Layout = ({ children }) => {
  
  const { route, subRoute, pathname, tab, onTabClick } = useRoutes();
  const [appNotification, _] = useAppNotification();
  const windowSize = useWindowSize();

  const renderNotification = (notification) => (
    <InlineNotification
      key={notification.title}
      style={{ justifyContent: "center" }}
      title={notification.title || "Notification"}
      subtitle={notification.subtitle || ""}
      kind={notification.kind || "info-square"}
      onCloseButtonClick={notification.onClose}
      actions={
        notification.onAction && (
          <NotificationActionButton onClick={notification.onAction}>
            {notification.actionText || "Action"}
          </NotificationActionButton>
        )
      }
    ></InlineNotification>
  );

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
      {appNotification && renderNotification(appNotification)}
      {windowSize.width > 1312 && <footer className={styles.footer}></footer>}
      <Dialog />
    </>
  );
};

export default Layout;
