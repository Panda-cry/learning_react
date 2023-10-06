import React from "react";
const CartContext = React.createContext({
  meals: [],
  totalAmount: "",
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

export default CartContext;
