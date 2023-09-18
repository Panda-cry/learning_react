import React, { useContext } from "react";
import FoodElement from "./FoodElement";
import MealContext, { MealProvider } from "./MealsContex";

function FoodList(props) {
  const ctx = useContext(MealContext);
  function onClickHandler(id) {
    ctx.addAmount(id);
  }
  function restoreButton() {
    props.clickButton(false);
  }
  return (
    <div className="d-flex  justify-content-center" onClick={restoreButton}>
      <ul className="list-group ">
        {ctx.meals.map((food) => (
          <FoodElement food={food} addAmount={onClickHandler} />
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
