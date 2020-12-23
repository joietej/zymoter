import React from "react";
import { RecoilRoot } from "recoil";
import DebugObserver from "../recoil/debugObserver";
import Head from "next/head";
import useServiceWorker from "../hooks/serviceWorker";
import Layout from "../layout/Layout";

import "../styles/app.scss";
import { Modal } from "carbon-components-react";

const MyApp = ({ Component, pageProps }) => {
  const [open, setOpen] = React.useState(false);

  const promptNewVersionAvailable = () => {
    setOpen(true);
  };

  useServiceWorker(promptNewVersionAvailable);

  const updateApp = (update) => {
    const wb = window.workbox;
    if (update) {
      wb.addEventListener("controlling", (event) => {
        console.log('reload');
        window.location.reload();
      });
      console.log(wb);
      // Send a message to the waiting service worker, instructing it to activate.
      wb.messageSW({ type: "SKIP_WAITING" });
    } else {
      console.log(
        "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
      );
    }
  };

  return (
    <RecoilRoot>
      {/* <DebugObserver /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Modal
        open={open}
        primaryButtonText="Update"
        secondaryButtonText="Cancel"
        onSecondarySubmit={() => updateApp(false)}
        onRequestClose={() => updateApp(false)}
        onRequestSubmit={() => updateApp(true)}
      >
        <p>A newer version of this web app is available, reload to update?</p>
      </Modal>
    </RecoilRoot>
  );
};

export default MyApp;
