import { useRecoilState } from "recoil";
import {checkoutDialogState} from "../state/checkoutState";
import loginDialogState from "../state/loginState";

export const useCheckoutDialog = () => {
    const [isOpen, setIsOpen] = useRecoilState(checkoutDialogState);
    return [isOpen, setIsOpen];
}

export const useLoginDialog = () => {
    const [isOpen, setIsOpen] = useRecoilState(loginDialogState);
    return [isOpen, setIsOpen];
}