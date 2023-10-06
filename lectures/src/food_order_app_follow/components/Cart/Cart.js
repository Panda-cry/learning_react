import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);

  const cartItems = ctx.meals.map((item) => (
    <CartItem id={item.id} name={item.name} price={item.price}></CartItem>
  ));
  return (
    <Modal>
      <ul>{cartItems}</ul>
      <div>
        <span>Total amount :</span>
        <span>{ctx.totalAmount}</span>
      </div>
      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
