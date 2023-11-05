import { useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";

function CartItem(props) {
  const dispatch = useDispatch();

  function onClickAddHandler() {
    dispatch(
      cartActions.addItem({
        id: props.id,
      })
    );
  }

  function onClickRemoveItem() {
    dispatch(cartActions.removeItem({ id: props.id }));
  }
  return (
    <li key={props.id} id={props.id}>
      <span> {props.name} </span>
      <span> {props.amount} </span>
      <span> {props.total} </span>
      <button onClick={onClickAddHandler}> + </button>
      <button onClick={onClickRemoveItem}> - </button>
    </li>
  );
}

export default CartItem;
