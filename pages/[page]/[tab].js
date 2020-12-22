import React from "react";
import useComponent from "../../hooks/component";
import useRoutes from "../../hooks/routes";

const TabView = () => {
  const { page, tab } = useRoutes();
  const Component = useComponent(page, tab);
  //return <div>{`${page}-${tab}`}</div>;
  return <Component />;
};

export default TabView;
