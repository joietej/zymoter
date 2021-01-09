import { useRecoilState } from "recoil";
import { appNotificationState } from "../../store/state/notificationsState";
import notificationsSelector from "../../store/selectors/notificationsSelector";

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
