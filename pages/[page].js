import React from "react";
import useComponent from "../hooks/component";
import useRoutes from "../hooks/routes";

import executeService from "../services";

const PageView = ({ data }) => {
  const { page } = useRoutes();
  const Component = useComponent(page, page);
  //return <div>{`${page}-${tab}`}</div>;
  return <Component data={data} />;
};

export async function getServerSideProps(context) {
  const { page } = context.params;
  // Fetch data from external API
  const data = await executeService(page) || [];
  // Pass data to the page via props
  return { props: { data } };
}

export default PageView;
