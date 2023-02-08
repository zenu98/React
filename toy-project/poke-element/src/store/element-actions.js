import { resultActions } from "./result-slice";

export const fetchTypeData = (type) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log(type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/offense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();

      return data;
    };
    const fetchDefenseData = async () => {
      console.log(type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/defense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const defenseData = await response.json();

      return defenseData;
    };
    try {
      const typeData = await fetchData();
      const defenseTypeData = await fetchDefenseData();
      console.log(defenseTypeData);

      dispatch(
        resultActions.setType({
          typeData,
        })
      );
      dispatch(
        resultActions.setDefenseType({
          defenseTypeData,
        })
      );
    } catch (error) {
      throw new Error("error");
    }
  };
};

export const fetchTypeDatas = (type) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log(type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/offense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();

      return data;
    };
    try {
      const typeDataTwo = await fetchData();
      console.log(typeDataTwo);
      dispatch(
        resultActions.setTypeTwo({
          typeDataTwo,
        })
      );
    } catch (error) {
      throw new Error("error");
    }
  };
};
