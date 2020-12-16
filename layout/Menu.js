import React from "react";
import {
  HeaderMenu,
  HeaderMenuItem,
  HeaderNavigation,
} from "carbon-components-react";


const Menu = () => {
  return (
    <>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu menuLinkName="Link 4" aria-label="Link 4">
          <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
    </>
  );
};

export default Menu;
