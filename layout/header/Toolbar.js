import React from "react";
import {
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react";

import { AppSwitcher20, Search20, Notification20 } from "@carbon/icons-react";

const Toolbar = () => {
  return (
    <>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search">
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </>
  );
};

export default Toolbar;
