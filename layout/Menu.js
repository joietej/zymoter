import React from "react";
import {
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
} from "carbon-components-react";
import Link from "next/link";

const HeaderMenuItemLink = React.forwardRef(({ onClick, href, name, icon, pathname }, ref) => {
  return (
    <HeaderMenuItem isCurrentPage={pathname.endsWith(name)} href={href} onClick={onClick} ref={ref} icon={icon}>
      <>
      {name}
      </>
    </HeaderMenuItem>
  );
});

const Menu = ({ routes, pathname }) => {
  return (
    <HeaderNavigation>
      {routes
        .filter((r) => r.sub)
        .map((route) => (
          <HeaderMenu key={route.name} menuLinkName={route.name} aria-label={route.name}>
            {route.sub.map((r) => (
              <Link key={r.name} href={route.path + r.path} passHref>
                <HeaderMenuItemLink name={r.name} icon={r.icon} pathname={pathname}/>
              </Link>
            ))}
          </HeaderMenu>
        ))}
    </HeaderNavigation>
  );
};

export default Menu;
