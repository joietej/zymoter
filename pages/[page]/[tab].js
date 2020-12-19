import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import "../../config/routes";

const importComponent = (folder, component) =>
  dynamic(
    () =>
      import(`../../components/${folder}/${component}`).catch(() =>
        import("../../components/Empty")
      ),
    { loading: () => <div>{`loading ${folder}-${component}`}</div> }
  );

const View = () => {
  const router = useRouter();
  const { page, tab } = router.query;
  const Component = importComponent(
    page,
    `${tab?.charAt(0).toUpperCase()}${tab?.substring(1)}`
  );
  //return <div>{`${page}-${tab}`}</div>;
  return <Component />;
};

export default View;
