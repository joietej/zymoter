import React from "react";
import { useAppNotification } from "../store/hooks/notifications";

const useServiceWorker = () => {
  const [_, setAppNotification] = useAppNotification();

  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;

      const updateApp = (update) => {
        if (update) {
          wb.addEventListener("controlling", (event) => {
            console.log("reload");
            window.location.reload();
          });
          // Send a message to the waiting service worker, instructing it to activate.
          console.log("sending skip waiting");
          wb.messageSW({ type: "SKIP_WAITING" });
        } else {
          console.log(
            "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
          );
        }
      };

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (event) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        // if (confirmActionFunc()) {
        //   wb.addEventListener("controlling", (event) => {
        //     window.location.reload();
        //   });

        //   // Send a message to the waiting service worker, instructing it to activate.
        //   wb.messageSW({ type: "SKIP_WAITING" });
        // } else {
        //   console.log(
        //     "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
        //   );
        // }
        console.log(event);
        setAppNotification({
          title: "Update Found",
          subtitle: "A newer juicy version is available, reload to update?",
          actionText: "Update",
          onAction: () => {
            console.log('in action');
            updateApp(true);
          },
          onClose: () => {
            updateApp(false);
          },
        });
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);
      //wb.addEventListener("externalwaiting", promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file
      wb.addEventListener("message", (event) => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);
};

export default useServiceWorker;
