import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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

const Route = ({route, onClick}) => {
  return (
    <Link  href={route.path} passHref>
      <NavLink name={route.name} renderIcon={route.icon || Fade16} onClick={onClick}/>
    </Link>
  );
};

const RouteWithSub = ({ route, pathname, onClick }) => {
  return (
    <SideNavMenu
      key={route.name}
      isActive={pathname.startsWith(route.path)}
      renderIcon={route.icon || Fade16}
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

const Sidebar = ({ routes, isExpanded }) => {
  const { pathname } = useRouter();
  const onClick = (e) => (isExpanded = false);
  return (
    <SideNav aria-label="Side navigation" isRail expanded={isExpanded}>
      <SideNavItems>
        {routes.map((r) =>
          r.sub && r.sub.length ? (
            <RouteWithSub key={r.name} route={r} pathname={pathname} onClick={onClick} />
          ) : (
            <Route key={r.name} route={r} onClick={onClick} />
          )
        )}
      </SideNavItems>
    </SideNav>
  );
};

export default Sidebar;
