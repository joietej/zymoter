import React from "react";
import useComponent from "../../hooks/component";
import useRoutes from "../../hooks/routes";

import executeService from "../../services";

const TabView = ({data}) => {
  const { page, tab } = useRoutes();
  const Component = useComponent(page, tab);
  return <Component data={data}/>;
};

export async function getServerSideProps(context) {
  const { page, tab } = context.params;
  // Fetch data from external API
  const data = await executeService(page, tab) || [];
  // Pass data to the page via props
  return { props: { data } };
}

export default TabView;
