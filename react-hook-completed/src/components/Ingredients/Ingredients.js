import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);

  const addIngredient = async (ingredient) => {
    const response = await fetch(
      "https://react-hook-3f4c6-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );
    const responseData = await response.json();
    setUserIngredient((prev) => [
      ...prev,
      { id: responseData.name, ...ingredient },
    ]);
  };
  const removeIngredient = (id) => {
    setUserIngredient((prev) => prev.filter((a) => a.id !== id));
  };

  const filterHandler = useCallback((filter) => {
    setUserIngredient(filter);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAdd={addIngredient} />

      <section>
        <Search onLoad={filterHandler} />
        <IngredientList
          onRemoveItem={removeIngredient}
          ingredients={userIngredient}
        />
      </section>
    </div>
  );
};

export default Ingredients;
