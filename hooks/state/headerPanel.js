import { useRecoilState } from "recoil";
import headerPanelState from "../../recoil/atoms/headerPanel";

const useHeaderPanelState = () => {
  const [isExpanded, setExpanded] = useRecoilState(headerPanelState);
  return [isExpanded, setExpanded];
};

export default useHeaderPanelState;
