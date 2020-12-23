import { ToastNotification } from "carbon-components-react";
import React from "react";

const removeItem = (array, index) => {
  const newArray = [...array].splice(index, 1);
  return newArray;
}

const Notifications = ({ notifications, onClose }) => {
  return (
    <>
      {notifications.map((n, i) => (
        <ToastNotification
          style={{width:'16rem'}}
          key={`notification${i}`}
          title={n.title || "Notification"}
          subtitle={n.subtitle || ""}
          kind={n.kind || "info-square"}
          onCloseButtonClick={() => onClose(removeItem(notifications, i))}
        ></ToastNotification>
      ))}
    </>
  );
};

export default Notifications;
