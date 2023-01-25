import { resultActions } from "./result-slice";

export const fetchTypeData = (type) => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
          `https://pokemon-8a1dd-default-rtdb.firebaseio.com/offense/${type}.json`
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const data = await response.json();
        return data;
      };
      try {
        const typeData = await fetchData();
        dispatch(
          resultActions.setType({
            typeData
          })
        );
      } catch (error) {
        throw new Error("error");
      }
    };
  };