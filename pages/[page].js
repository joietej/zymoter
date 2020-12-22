import React from "react";
import useComponent from "../hooks/component";
import useRoutes from "../hooks/routes";

const PageView = () => {
  const { page } = useRoutes();
  const Component = useComponent(page, page);
  //return <div>{`${page}-${tab}`}</div>;
  return <Component />;
};

export default PageView;
