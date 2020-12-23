import React from "react";
import {
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Tag,
  Row,
} from "carbon-components-react";

import {
  AppSwitcher20,
  Search20,
  Notification20,
  NotificationNew20,
} from "@carbon/icons-react";

import Notifications from "../notifications/Notifications";
import useNotifications from "../../hooks/state/notifications";

const Toolbar = () => {
  const [notifications, setNotifications] = useNotifications();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search">
          <Search20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          onClick={() => setIsExpanded(!isExpanded)}
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
        <Notifications
          notifications={notifications}
          onClose={(n) => setNotifications(n)}
        />
      </HeaderPanel>
    </>
  );
};

export default Toolbar;
