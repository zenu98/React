import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvaliableMeals";
import React from "react";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};
export default Meals;
