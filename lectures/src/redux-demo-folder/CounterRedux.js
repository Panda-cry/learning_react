import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/index";
function CounterRedux() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);
  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function increaseHandler() {
    dispatch(counterActions.increase(5));
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  function toogleHandler() {
    dispatch(counterActions.toogle());
  }
  return (
    <div className="container">
      <p>Redux counter</p>
      {show && <div>{counter}</div>}
      <button onClick={incrementHandler}>Add</button>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toogleHandler}>Toogle</button>
    </div>
  );
}

export default CounterRedux;
