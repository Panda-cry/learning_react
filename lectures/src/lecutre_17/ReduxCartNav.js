import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "./store/toogle-slice";

function ReduxCartNav() {
  const counter = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  function toggleCartHandler() {
    dispatch(toggleActions.toggle());
  }
  return (
    <nav>
      Redux Cart
      <div>
        <button onClick={toggleCartHandler}> My cart {counter.length}</button>
      </div>
    </nav>
  );
}

export default ReduxCartNav;
