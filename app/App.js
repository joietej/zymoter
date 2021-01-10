import React from "react";
import DebugObserver from "../store/debugObserver";

import Head from "next/head";

import Layout from "../layout/Layout";

import useServiceWorker from "../hooks/serviceWorker";

const App = ({ Component, pageProps }) => {
  //useServiceWorker();

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
