import React from "react";
import { useRecoilSnapshot } from "recoil";

const DebugObserver = () => {
  const snapshot = useRecoilSnapshot();
  React.useEffect(() => {
    console.debug("The following atoms were modified:");
    for (const node of snapshot.getNodes({ modified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};

export default DebugObserver;