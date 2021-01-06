import React from "react";
import {
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Tag
} from "carbon-components-react";

import {
  AppSwitcher20,
  Search20,
  Notification20,
  NotificationNew20,
  ShoppingCart20,
} from "@carbon/icons-react";

import { blue40 } from '@carbon/colors';

import Notifications from "../notifications/Notifications";

import useNotifications from "../../hooks/state/notifications";
import useCart from "../../hooks/state/cart";

import Cart from "../cart/Cart";

const Toolbar = () => {
  const [notifications, setNotifications] = useNotifications();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [headerPanelType, setHeaderPanelType] = React.useState("");
  const { cart } = useCart();

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
          <>
            <ShoppingCart20 />
            {cart?.line_items?.length > 0 && (<span style={{ color: blue40 }}>🎁</span>)}
          </>
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
            <Cart cart={cart} />
          )}
      </HeaderPanel>
    </>
  );
};

export default Toolbar;
