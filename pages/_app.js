import Layout from "../layout/Layout";
import "../styles/app.scss";

import Head from "next/Head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="sample store app" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Zymoter</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
