import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartValue = {
  meals: [],
  totalAmount: 0,
};

function delegateReducer(state, action) {
  if (action.type === "ADD") {
    let updatedMeals = state.meals.concat(action.meal);
    let newTotalAmount =
      state.totalAmount + action.meal.price * action.meal.amount;
    return { meals: updatedMeals, totalAmount: newTotalAmount };
  }
  if (action.type === "REMOVE") {
    let updatedMeals = state.meals.filter((meal) => meal.id != action.id);
    let totalAmount = updatedMeals.reduce((sum, meal) => {
      return (sum = sum + meal.price * meal.amount);
    }, 0);
    return { meals: updatedMeals, totalAmount: totalAmount };
  }
  return defaultCartValue;
}
function CartProvider(props) {
  const [currentCart, setCart] = useReducer(delegateReducer, defaultCartValue);
  function onAddMealHandler(meal) {
    setCart({ type: "ADD", meal: meal });
  }
  function onMealRemoveHandler(id) {
    setCart({ type: "REMOVE", id: id });
  }
  return (
    <CartContext.Provider
      value={{
        meals: currentCart.meals,
        totalAmount: currentCart.totalAmount,
        addMeal: onAddMealHandler,
        removeMeal: onMealRemoveHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
