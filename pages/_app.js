import Head from "next/head";
import useServiceWorker from "../hooks/serviceWorker";
import Layout from "../layout/Layout";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }) => {
  
  const confirmFunc = () =>
    confirm("A newer version of this web app is available, reload to update?");

  useServiceWorker(confirmFunc);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
