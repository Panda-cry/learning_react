import { useContext, useRef } from "react";
import Input from "../UI/Input";

function MealItemForm(props) {
  const amountInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredNumber === 0 ||
      enteredNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredNumber);
  }
  return (
    <form className="form-group" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount :"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="btn btn-primary">+ Add</button>
    </form>
  );
}
export default MealItemForm;
