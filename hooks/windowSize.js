import React from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    height: process.browser ? window.innerHeight : 0,
    width: process.browser ? window.innerWidth : 0,
  });

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowSize]);

  return windowSize;
};

export default useWindowSize;
