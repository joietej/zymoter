import { useRecoilState } from "recoil";
import cartSelector from "../../recoil/selectors/cartSelector";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartSelector);

  const addItem = (item) => {
    setCart(item);
  };

  const removeItem = (item) => {
    const newCart = [...cart];
    newCart.splice(cart.indexOf(item), 1);
    setCart(newCart);
  };

  const updateItem = (item) => {
    const newCart = cart.map((c) => (c.id === item.id ? { ...c, ...item } : c));
    setCart(newCart);
  };

  return { cart, addItem, updateItem, removeItem };
};

export default useCart;
