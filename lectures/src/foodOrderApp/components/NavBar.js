import React, { useState, useEffect, useContext } from "react";
import MealContext from "./MealsContex";

function NavBar(props) {
  function onClickHandler() {
    props.clickButton(true);
  }
  let ctx = useContext(MealContext);
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Food Order App
        </a>

        <div className="navbar-text">
          <span onClick={onClickHandler}>Sum is : {ctx.count}</span>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
