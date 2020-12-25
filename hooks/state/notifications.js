import { useRecoilState } from "recoil";
import { appNotificationState } from "../../recoil/atoms/notifications";
import notificationsSelector from "../../recoil/selectors/notificationsSelector";

const useNotifications = () => {
  const [notifications, setNotifications] = useRecoilState(
    notificationsSelector
  );
  return [notifications, setNotifications];
};

export const useAppNotification = () => {
  const [appNotification, setAppNotification] = useRecoilState(
    appNotificationState
  );
  return [appNotification, setAppNotification];
};

export default useNotifications;
