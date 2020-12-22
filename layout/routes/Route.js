import React from "react";
import Link from "next/link";
import { SideNavLink } from "carbon-components-react";
import { Fade16 } from "@carbon/icons-react";

export const NavLink = React.forwardRef(
  ({ onClick, href, name, renderIcon }, ref) => {
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
  }
);

const Route = ({ route, onClick }) => {
  return (
    <Link href={route.path} passHref>
      <NavLink
        name={route.name}
        renderIcon={route.icon || Fade16}
        onClick={onClick}
      />
    </Link>
  );
};

export default Route;
