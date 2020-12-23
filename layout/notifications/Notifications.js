import { InlineNotification } from "carbon-components-react";
import React from "react";

const Notifications = ({ notifications, onClose }) => {
  return (
    <>
      {notifications.map((n, i) => (
        <InlineNotification
          key={`notification${i}`}
          title={n.title || "Notification"}
          subtitle={n.subtitle || ""}
          kind={n.kind || "info-square"}
          onCloseButtonClick={() => onClose(notifications.splice(i, 1))}
        ></InlineNotification>
      ))}
    </>
  );
};

export default Notifications;
