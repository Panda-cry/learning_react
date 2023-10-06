import React from "react";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";
function MealItem(props) {
  const ctx = useContext(CartContext);
  function addMealToCart(amount) {
    ctx.addMeal({
      name: props.name,
      id: props.id,
      price: props.price,
      amount: amount,
    });
  }
  return (
    <li className="list-group-item">
      <div>
        <h3>{props.name}</h3>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
      </div>
      <div>
        <MealItemForm onAddToCart={addMealToCart}></MealItemForm>
      </div>
    </li>
  );
}

export default MealItem;
