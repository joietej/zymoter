import React from "react";
import { useRouter } from "next/router";

import "../../config/routes";

const View = () => {
  const router = useRouter();
  const {page, tab} = router.query;
  return <div>{`${page} - ${tab}`}</div>;
};

export default View;
