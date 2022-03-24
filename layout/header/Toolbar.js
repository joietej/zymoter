import React from "react";
import {
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
} from "carbon-components-react";

import {
  Search20,
  Notification20,
  NotificationNew20,
  ShoppingCart20,
  Login20,
  Logout20,
} from "@carbon/icons-react";

import { blue40 } from "@carbon/colors";

import Notifications from "../notifications/Notifications";

import useNotifications from "../../store/hooks/notifications";
import useCart from "../../store/hooks/cart";
import { useLoginDialog } from "../../store/hooks/dialogs";

import Cart from "../cart/Cart";
import { useRecoilValue } from "recoil";
import { isAuthenticatedSelector } from "../../store/selectors/userSelector";

const Toolbar = () => {
  const [, setOpenLoginDialog] = useLoginDialog();
  const [notifications, setNotifications] = useNotifications();
  const { cart } = useCart();

  const [isExpanded, setIsExpanded] = React.useState(false);
  const [headerPanelType, setHeaderPanelType] = React.useState("");

  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);

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
            {cart?.line_items?.length > 0 && (
              <span style={{ color: blue40 }}>{cart.line_items.length}</span>
            )}
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
        <HeaderGlobalAction
          aria-label="Login"
          onClick={() => setOpenLoginDialog(true)}
        >
          {isAuthenticated ? <Logout20 /> : <Login20 />}
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
