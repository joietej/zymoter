import React from "react";
import {
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
} from "carbon-components-react";

import {
  AppSwitcher20,
  Search20,
  Notification20,
  NotificationNew20,
  ShoppingCart20,
} from "@carbon/icons-react";

import Notifications from "../notifications/Notifications";
import useNotifications from "../../hooks/state/notifications";
import Cart from "../cart/Cart";

const Toolbar = () => {
  const [notifications, setNotifications] = useNotifications();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [headerPanelType, setHeaderPanelType] = React.useState("");

  const toggleHeaderPanel = (show, type) => {
    if (headerPanelType === type) {
      setIsExpanded(!isExpanded);
    } else {
      setIsExpanded(show);
      setHeaderPanelType(type);
    }
  };

  return (
    <>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search">
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Cart"
          onClick={() => toggleHeaderPanel(true, "cart")}
        >
          <ShoppingCart20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          onClick={() => toggleHeaderPanel(true, "notifications")}
        >
          {notifications.length > 0 ? (
            <NotificationNew20 />
          ) : (
            <Notification20 />
          )}
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <HeaderPanel aria-label="right panel" expanded={isExpanded}>
        {headerPanelType === "notifications" ? (
          <Notifications
            notifications={notifications}
            onClose={(n) => setNotifications(n)}
          />
        ) : (
          <Cart />
        )}
      </HeaderPanel>
    </>
  );
};

export default Toolbar;
