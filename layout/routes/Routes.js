import React from "react";
import Route from "./Route";
import RouteWithSub from "./RouteWithSub";

const Routes = ({ routes, position, pathname, onClick }) => {
  return (
    <>
      {routes
        .filter((r) => r.position === position)
        .map((r) =>
          r.sub && r.sub.length ? (
            <RouteWithSub
              key={r.name}
              route={r}
              pathname={pathname}
              onClick={onClick}
            />
          ) : (
            <Route key={r.name} route={r} onClick={onClick} />
          )
        )}
    </>
  );
};

export default Routes;
