import React from "react";
import {
  InlineNotification,
  ToastNotification,
  NotificationActionButton,
} from "carbon-components-react";
import { useAppNotification } from "../../store/hooks/notifications";

const AppNotification = () => {
  const [notification, _] = useAppNotification();

  if (!notification) return null;

  return notification.type === "toast" ? (
    <ToastNotification
      key={notification.caption}
      style={{ position: "absolute", top: "3rem", right: 0 }}
      title={notification.title || "Notification"}
      subtitle={notification.subtitle || ""}
      caption={notification.caption || ""}
      kind={notification.kind || "info-square"}
      onCloseButtonClick={notification.onClose}
      timeout={notification.timeout}
    ></ToastNotification>
  ) : (
    <InlineNotification
      key={notification.title}
      style={{ justifyContent: "center" }}
      title={notification.title || "Notification"}
      subtitle={notification.subtitle || ""}
      kind={notification.kind || "info-square"}
      onCloseButtonClick={notification.onClose}
      actions={
        !!notification.onAction && (
          <NotificationActionButton onClick={notification.onAction}>
            {notification.actionText || "Action"}
          </NotificationActionButton>
        )
      }
    ></InlineNotification>
  );
};

export default AppNotification;
