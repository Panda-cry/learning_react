import React, { useState } from "react";
const initFood = [
  {
    id: "1",
    title: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg",
    description: "Description",
    price: 123,
    amount: 0,
  },
  {
    id: "2",
    title: "Pizza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1280px-Pizza-3007395.jpg",
    description: "Description",
    price: 123,
    amount: 0,
  },
  {
    id: "3",
    title: "Pasta",
    image:
      "data:image/jpeg;base64,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",
    description: "Description",
    price: 123,
    amount: 0,
  },
  {
    id: "4",
    title: "Soup",
    image:
      "data:image/jpeg;base64,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",
    description: "Description",
    price: 123,
    amount: 0,
  },
  {
    id: "5",
    title: "Fish meal",
    image:
      "data:image/jpeg;base64,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",
    description: "Description",
    price: 123,
    amount: 0,
  },
];
export const MealProvider = function MealProvider(props) {
  const [foodList, setFoodList] = useState(initFood);
  const [count, setCount] = useState(0);
  function addAmountHandler(id) {
    foodList.find((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
        setCount(count + 1);
      }
    });
  }
  function substractAmount(id) {
    foodList.find((item) => {
      if (item.id === id) {
        item.amount = item.amount - 1;
        setCount(count - 1);
      }
    });
  }
  function sumUp() {
    let sum = 0;
    foodList.forEach((item) => {
      if (item.amount > 0) {
        sum = sum + item.amount * item.price;
      }
    });
    return sum;
  }

  return (
    <MealContext.Provider
      value={{
        meals: initFood,
        count: count,
        addAmount: addAmountHandler,
        substractAmount: substractAmount,
        sum: sumUp,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};

const MealContext = React.createContext({
  meals: [],
  count: "",
  addAmount: () => {},
  substractAmount: () => {},
  sum: () => {},
});

export default MealContext;
