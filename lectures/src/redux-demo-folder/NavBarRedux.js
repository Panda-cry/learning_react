import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function NavBarRedux(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  function buttonOnClickHandler() {
    dispatch(authActions.logout());
  }
  return (
    <nav>
      <div>React Nav</div>
      <div>My Products</div>
      <div>My Sales</div>
      {auth && <button onClick={buttonOnClickHandler}>Logout</button>}
    </nav>
  );
}

export default NavBarRedux;
