import { useRecoilState } from "recoil";
import notificationsSelector from "../../recoil/selectors/notificationsSelector";

const useNotifications = () => {
  const [notifications, setNotifications] = useRecoilState(
    notificationsSelector
  );
  return [notifications, setNotifications];
};

export default useNotifications;
