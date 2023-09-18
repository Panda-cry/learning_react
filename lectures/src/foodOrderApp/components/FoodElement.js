import { useState } from "react";

function FoodElement(props) {
  let food = props.food;
  const [amount, setAmount] = useState(food.amount);
  function addOnAmount() {
    props.addAmount(food.id);
    setAmount(amount + 1);
  }
  return (
    <li className="list-group-item" key={food.id} id={food.id}>
      <img src={food.image} width="100px" height="100px" />
      <p>Title : {food.title}</p>
      <p>Description : {food.description}</p>
      <p>Price : {food.price}</p>
      <p>Amount : {amount}</p>
      <button onClick={addOnAmount}>+ Add</button>
    </li>
  );
}

export default FoodElement;
