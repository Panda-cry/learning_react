import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueTouched;
  console.log(hasError);
  function valueInputHandler(event) {
    setEnteredValue(event.target.value);
    console.log("Changed");
  }

  function valueBlurHandler(event) {
    setEnteredValueIsTouched(true);
    console.log("Blured");
  }

  function reset() {
    console.log("reseted");
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  }
  return {
    value: enteredValue,
    hasError,
    valueIsValid,
    valueInputHandler,
    valueBlurHandler,
    reset,
  };
}

export default useInput;
