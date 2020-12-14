import React from "react";
import Link from "next/link";
import {
  SideNav,
  SideNavLink,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
} from "carbon-components-react";

import { Fade16 } from "@carbon/icons-react";

const NavMenuItemLink = React.forwardRef(({ onClick, href, name }, ref) => {
  return (
    <SideNavMenuItem href={href} onClick={onClick} ref={ref}>
      {name}
    </SideNavMenuItem>
  );
});

const NavLink = React.forwardRef(({ onClick, href, name, renderIcon }, ref) => {
  return (
    <SideNavLink
      renderIcon={renderIcon}
      href={href}
      ref={ref}
      onClick={onClick}
    >
      {name}
    </SideNavLink>
  );
});

const renderRoute = (route) => {
  return (
    <Link href={route.path} passHref>
      <NavLink name={route.name} renderIcon={Fade16} />
    </Link>
  );
};

const renderRouteWithSub = (route) => {
  return (
    <SideNavMenu renderIcon={Fade16} title={route.name}>
      {route.sub.map((r) => (
        <Link href={route.path + r.path} passHref>
          <NavMenuItemLink name={r.name} />
        </Link>
      ))}
    </SideNavMenu>
  );
};

const Sidebar = ({ routes, isExpanded }) => {
  return (
    <SideNav aria-label="Side navigation" isRail expanded={isExpanded}>
      <SideNavItems>
        {routes.map((r) =>
          r.sub && r.sub.length ? renderRouteWithSub(r) : renderRoute(r)
        )}
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;
