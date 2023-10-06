import React from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";
function CartItem(props) {
  const ctx = useContext(CartContext);
  function removeMeal() {
    ctx.removeMeal(props.id);
  }
  return (
    <li className="list-group-item">
      <div>
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
      </div>
      <div>
        <button onClick={removeMeal}>Remove Me</button>
      </div>
    </li>
  );
}

export default CartItem;
