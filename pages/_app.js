import Layout from "../layout/Layout";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout routeName ={Component.routeName || Component.title}  title={Component.title || 'NA'}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
