import React, { useState, useCallback } from "react";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredient, setUserIngredient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const addIngredient = async (ingredient) => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-hook-3f4c6-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );
    setIsLoading(false);
    const responseData = await response.json();
    setUserIngredient((prev) => [
      ...prev,
      { id: responseData.name, ...ingredient },
    ]);
  };
  const removeIngredient = async (id) => {
    setIsLoading(true);
    try {
      console.log("1");
      await fetch(
        `https://react-hook-3f4c6-default-rtdb.firebaseio.com/ingredients/${id}.jso`,
        {
          method: "DELETE",
        }
      );
      setIsLoading(false);
      setUserIngredient((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError("저런..");
      setIsLoading(false);
    }
  };
  const clearError = () => {
    setError(null);
  };

  const filterHandler = useCallback((filter) => {
    setUserIngredient(filter);
  }, []);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAdd={addIngredient} loading={isLoading} />

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
