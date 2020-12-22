import React from "react";
import Routes from "./Routes";

const RoutesContainer = ({ routes, pathname, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90%",
      }}
    >
      <div>
        <Routes
          routes={routes}
          pathname={pathname}
          onClick={onClick}
          position="top"
        />
      </div>
      <div>
        <Routes
          routes={routes}
          pathname={pathname}
          onClick={onClick}
          position="bottom"
        />
      </div>
    </div>
  );
};

export default RoutesContainer;
