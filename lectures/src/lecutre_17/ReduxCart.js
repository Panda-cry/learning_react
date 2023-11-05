import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import ProductList from "./ProductList";
import ReduxCartNav from "./ReduxCartNav";

function ReduxCart() {
  const toggle = useSelector((state) => state.ui.isVisible);
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <ReduxCartNav></ReduxCartNav>

      {toggle && <CartItems></CartItems>}
      <ProductList></ProductList>
    </div>
  );
}

export default ReduxCart;
