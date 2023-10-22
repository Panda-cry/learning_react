import { useRef, useState, useEffect } from "react";
import useInput from "./hooks/use-input";

function SimpleFunction(props) {
  function validationFunction(value) {
    return value.trim() !== "";
  }
  const {
    value: enteredValue,
    hasError,
    valueIsValid,
    valueInputHandler,
    valueBlurHandler,
    reset,
  } = useInput(validationFunction);

  function formSubmissionHandler(event) {
    event.preventDefault();

    reset();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          id="name"
          onChange={valueInputHandler}
          onBlur={valueBlurHandler}
          value={enteredValue}
        />
        {hasError && <label>Error</label>}
      </div>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default SimpleFunction;

{
  /*Iskreno ovaj pristup meni nesto ne odgovara jer kreiram 2 bool polja 
    mislim sa useReducer da moze to kvalitetnije  sa manje efforta da se odradi 
    jeste da npr moram da odradim useEffect da pozovem http request na backend
    i zato moram da se ogradim sa ova dva polja generalno ovde vidi da li se sta ponavlja i baci to na genericko nesto 
    da ne bi ponavljao stalno 
    ovde moze useReducer da se ubaci ali po meni neki najbolji nacin da se iskoristi useReducer je u context 
    tu bi trebalo da se olaksa pracenje stanja neke list itd.
     */
}
