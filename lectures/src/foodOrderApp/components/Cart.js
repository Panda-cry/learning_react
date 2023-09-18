import { useContext, useState } from "react";
import MealContext from "./MealsContex";
import CartElement from "./CartElement";

function Cart(props) {
  var ctx = useContext(MealContext);
  return (
    <div>
      <ul className="list-group">
        {ctx.meals.map((item) => {
          if (item.amount > 0) {
            return (
              <CartElement
                food={item}
                addAmount={ctx.addAmount}
                substractAmount={ctx.substractAmount}
              ></CartElement>
            );
          }
        })}
      </ul>
      <p>Sum is {ctx.count}</p>
    </div>
  );
}

export default Cart;
