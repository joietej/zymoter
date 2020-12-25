import React from "react";
import DebugObserver from "../recoil/debugObserver";

import Head from "next/head";

import Layout from "../layout/Layout";

import useServiceWorker from "../hooks/serviceWorker";
import { useAppNotification } from "../hooks/state/notifications";

const updateApp = (update) => {
  const wb = window.workbox;
  if (update) {
    wb.addEventListener("controlling", (event) => {
      console.log("reload");
      window.location.reload();
    });
    // Send a message to the waiting service worker, instructing it to activate.
    wb.messageSW({ type: "SKIP_WAITING" });
  } else {
    console.log(
      "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
    );
  }
};

const App = ({ Component, pageProps }) => {
  const [_, setAppNotification] = useAppNotification();

  const promptNewVersionAvailable = () => {
    setAppNotification({
      title: "Update Found",
      subtitle: "A newer juicy version is available, reload to update?",
      actionText: "Update",
      onAction: (e) => {
        e.preventDefault();
        updateApp(true);
      },
      onClose: () => {
        updateApp(false);
      },
    });
  };

  useServiceWorker(promptNewVersionAvailable);

  return (
    <>
      {/* <DebugObserver /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
