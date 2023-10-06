import MealItem from "./MealItem.js";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", description: "I am sushi", price: 22.99 },
  { id: "m2", name: "Pasta", description: "I am Pasta", price: 23.99 },
  { id: "m3", name: "Pizza", description: "I am Pizza", price: 24.99 },
  { id: "m4", name: "Bacon", description: "I am Bacon", price: 25.99 },
  { id: "m5", name: "Eggs", description: "I am Eggs", price: 26.99 },
];

function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className="d-flex">
      <Card>
        <ul className="list-group">{mealList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
