import React from "react";
import Link from "next/link";
import { SideNavMenu, SideNavMenuItem } from "carbon-components-react";

const NavMenuItemLink = React.forwardRef(({ onClick, href, name }, ref) => {
  return (
    <SideNavMenuItem href={href} onClick={onClick} ref={ref}>
      {name}
    </SideNavMenuItem>
  );
});

const RouteWithSub = ({ route, pathname, onClick }) => {
  return (
    <SideNavMenu
      key={route.name}
      isActive={pathname.startsWith(route.path)}
      renderIcon={route.icon}
      title={route.name}
    >
      {route.sub.map((r) => (
        <Link key={r.name} href={route.path + r.path} passHref>
          <NavMenuItemLink name={r.name} onClick={onClick} />
        </Link>
      ))}
    </SideNavMenu>
  );
};

export default RouteWithSub;
