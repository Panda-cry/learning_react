import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartItems() {
  const init_value = useSelector((state) => state.cart.items);
  return (
    <div className="container">
      <ul>
        {init_value.map((item) => (
          <CartItem
            name={item.name}
            id={item.id}
            total={item.total}
            amount={item.amount}
          ></CartItem>
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
