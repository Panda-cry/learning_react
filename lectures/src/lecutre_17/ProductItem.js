import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/cart-slice";

function ProductItem(props) {
  const dispatch = useDispatch();
  function onClickHanlder() {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
      })
    );
  }
  return (
    <li key={props.id} id={props.id}>
      <span> {props.name}</span>
      <span> {props.description}</span>
      <span> {props.price} </span>
      <button onClick={onClickHanlder}>Add to cart</button>
    </li>
  );
}

export default ProductItem;

{
  /*
  nikada ne treba da se menja redux iz neke komponente 
  mozemo da kreiramo nesot dummy pa da onda menjamo 
  ovako rucno napadanje ne sme 
  u komponenti kada bi trebalo da saljemo sve na backend moramo da kreiramo samo dummy podatke 
  i onda to saljemo 
   */
}
