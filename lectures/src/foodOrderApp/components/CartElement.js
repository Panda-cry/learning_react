function CartElement(props) {
  let food = props.food;

  function addAmount() {
    props.addAmount(food.id);
  }
  function substractAmount() {
    props.substractAmount(food.id);
  }
  return (
    <li className="list-group-item" key={food.id} id={food.id}>
      <p>Title : {food.title}</p>
      <p>Amount : {food.amount}</p>
      <button onClick={substractAmount}>-</button>
      <button onClick={addAmount}>+</button>
    </li>
  );
}

export default CartElement;
