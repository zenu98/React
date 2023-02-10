import { resultActions } from "./result-slice";

export const fetchTypeData = (type) => {
  return async (dispatch) => {
    const fetchFirstOffenseData = async () => {
      console.log("첫번째 공격 속성", type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/offense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const firstOffenseData = await response.json();

      return firstOffenseData;
    };
    const fetchFirstDefenseData = async () => {
      console.log("첫번째 방어 속성", type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/defense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const firstDefenseData = await response.json();

      return firstDefenseData;
    };
    try {
      const firstOffenseTypeData = await fetchFirstOffenseData();
      const firstDefenseTypeData = await fetchFirstDefenseData();
      console.log("첫번째 공격 속성 받음!", firstOffenseTypeData);
      console.log("첫번째 방어 속성 받음!", firstDefenseTypeData);

      dispatch(
        resultActions.setType({
          firstOffenseTypeData,
        })
      );
      dispatch(
        resultActions.setDefenseType({
          firstDefenseTypeData,
        })
      );
    } catch (error) {
      throw new Error("첫번째 오류");
    }
  };
};

export const fetchTypeDatas = (type) => {
  return async (dispatch) => {
    const fetchSecondOffenseData = async () => {
      console.log("두번째 공격 속성", type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/offense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const secondOffenseData = await response.json();

      return secondOffenseData;
    };
    const fetchSecondDefenseData = async () => {
      console.log("두번째 방어 속성", type.name);
      const response = await fetch(
        `https://pokemon-8a1dd-default-rtdb.firebaseio.com/defense/${type.name}.json`
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const secondDefenseData = await response.json();

      return secondDefenseData;
    };
    try {
      const secondOffenseTypeData = await fetchSecondOffenseData();
      const secondDefenseTypeData = await fetchSecondDefenseData();
      console.log("두번째 공격 속성 받음!", secondOffenseTypeData);
      console.log("두번째 방어 속성 받음!", secondDefenseTypeData);

      dispatch(
        resultActions.setTypeTwo({
          secondOffenseTypeData,
        })
      );
      dispatch(
        resultActions.setSecondDefenseType({
          secondDefenseTypeData,
        })
      );
    } catch (error) {
      throw new Error("두번째 오류");
    }
  };
};
