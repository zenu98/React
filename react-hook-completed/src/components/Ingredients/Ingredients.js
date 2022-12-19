import React, { useReducer, useCallback } from "react";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const IngredientReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredient;
    case "ADD":
      return [...state, action.ingredient];
    case "DELETE":
      return state.filter((a) => a.id !== action.id);
    default:
      throw new Error("error");
  }
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...state, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorMsg };
    case "CLEAR":
      return { ...state, error: null };
    default:
      throw new Error("error");
  }
};

const Ingredients = () => {
  const [userIngredient, dispatch] = useReducer(IngredientReducer, []);
  // const [userIngredient, setUserIngredient] = useState([]);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const addIngredient = async (ingredient) => {
    dispatchHttp({ type: "SEND" });
    const response = await fetch(
      "https://react-hook-3f4c6-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatchHttp({ type: "RESPONSE" });
    const responseData = await response.json();
    dispatch({
      type: "ADD",
      ingredient: { id: responseData.name, ...ingredient },
    });
    // setUserIngredient((prev) => [
    //   ...prev,
    //   { id: responseData.name, ...ingredient },
    // ]);
  };
  const removeIngredient = async (id) => {
    dispatchHttp({ type: "SEND" });
    try {
      console.log("1");
      await fetch(
        `https://react-hook-3f4c6-default-rtdb.firebaseio.com/ingredients/${id}.json`,
        {
          method: "DELETE",
        }
      );
      dispatchHttp({ type: "RESPONSE" });
      dispatch({ type: "DELETE", id: id });
      // setUserIngredient((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      dispatchHttp({ type: "ERROR", errorMsg: "저런..." });
    }
  };
  const clearError = () => {
    dispatchHttp({ type: "CLEAR" });
  };

  const filterHandler = useCallback((filter) => {
    // setUserIngredient(filter);
    dispatch({ type: "SET", ingredient: filter });
  }, []);

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm onAdd={addIngredient} loading={httpState.loading} />

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
