import React, { useState, useEffect, useCallback, useReducer } from "react";
import classes from "./Td.module.css";
import { CgCheckR } from "react-icons/cg";
import LoadingIndicator from "../UI/LoadingIndicator";
import AnimalModal from "../UI/AnimalModal";

const clickedDataReducer = (state, action) => {
  switch (action.type) {
    case "ON":
      return [...state, action.data];
    case "OFF":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      throw new Error("error");
  }
};

const disabledButtonReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.id];
    default:
      throw new Error("error");
  }
};

// const httpReducer = (state, action) => {
//   switch(action.type){
//     case "SEND":
//       return {loading:true,error:null};
//     case "RESOPNSE":
//       return {...state, loading:false};
//     case "ERROR":
//       return {loading:false, error:action.errorMsg};
//     case "CLEAR":
//       return {...state, error:null};
//     default:
//       throw new Error("error");
//   }
// }

const Td = (props) => {
  const { onClick } = props;
  const [clickedData, dispatch] = useReducer(clickedDataReducer, []);
  const [disabledBtn, dispatchDisabled] = useReducer(disabledButtonReducer, []);
  // const [httpState, dispatchHttp] = useReducer(httpReducer, {
  //   loading: false,
  //   error: null,
  // });
  const [isAnswer, setIsAnswer] = useState(false);
  const [answerWord, setAnswerWord] = useState();
  const [dataList, setDataList] = useState([]);
  const [chrList, setChrList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(disabledBtn);
  console.log(dataList);
  console.log(clickedData);
  console.log(answerWord);

  const dataListHandler = useCallback((data) => {
    console.log("datalist");
    setDataList(data);
  }, []);

  useEffect(() => {
    console.log("dataload");

    setIsLoading(true);
    const dataArr = [];

    const query = `?orderBy="length"&equalTo=${props.wordLength}`;

    fetch(
      "https://word-puzzle-efb93-default-rtdb.firebaseio.com/animals.json" +
        query
    )
      .then((response) => response.json())
      .then((responseData) => {
        for (let i = responseData.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [responseData[i], responseData[j]] = [
            responseData[j],
            responseData[i],
          ];
        }
        const loadedAnimals = [];
        for (const key in responseData) {
          if (loadedAnimals.length < 8) {
            loadedAnimals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              length: responseData[key].length,
            });
          } else break;
        }
        dataListHandler(loadedAnimals);

        for (let k = 0; k < loadedAnimals.length; k++) {
          for (let i = 0; i <= loadedAnimals[k].name.length - 1; i++) {
            const chr = loadedAnimals[k].name.substring(i, i + 1);

            dataArr.push({
              id: Math.random().toString(),
              word: chr,
            });
          }
        }
        dataArr.sort(() => Math.random() - 0.5);
        setChrList(dataArr);
        setIsLoading(false);
      });
  }, [dataListHandler, props.wordLength]);

  useEffect(() => {
    console.log("useEffect");
    let chr = "";
    clickedData.map(({ word }) => (chr += word));
    onClick(chr);
    console.log(clickedData);
  }, [onClick, clickedData]);

  const clickHandler = (e) => {
    console.log("click");
    console.log(e.target.name);

    if (clickedData.some((item) => item.id === e.target.name)) {
      dispatch({
        type: "OFF",
        id: e.target.name,
      });
    } else {
      clickedData.length < props.wordLength &&
        dispatch({
          type: "ON",
          data: { id: e.target.name, word: e.target.value },
        });
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (dataList.some((item) => item.name === props.word)) {
      setAnswerWord(dataList.filter((item) => item.name === props.word));
      setDataList((prev) => prev.filter((item) => item.name !== props.word));
      setIsAnswer(true);
      clickedData.map(({ id }) => {
        return dispatchDisabled({
          type: "ADD",
          id: id,
        });
      });
      dispatch({ type: "CLEAR" });

      props.onSubmit();
    } else {
      alert(`${props.word}...?`);
    }
  };

  const confirmHandler = () => {
    setIsAnswer(false);
  };

  return (
    <>
      {isAnswer && (
        <AnimalModal
          word={answerWord[0].name}
          description={answerWord[0].description}
          onConfirm={confirmHandler}
        />
      )}
      {isLoading ? (
        <div className={classes.loading}>
          <LoadingIndicator />
        </div>
      ) : (
        <div>
          <div className={classes[`data-table-${props.wordLength}`]}>
            {chrList.map((item) => (
              <button
                disabled={disabledBtn.includes(item.id)}
                type="button"
                name={item.id}
                key={item.id}
                value={item.word}
                className={`${
                  clickedData.some((a) => a.id === item.id)
                    ? classes["clicked-btn"]
                    : classes.btn
                }`}
                onClick={clickHandler}
              >
                <span>{item.word}</span>
              </button>
            ))}
          </div>

          <div className={classes["result-box"]}>
            <div>
              <span>{props.word[0]}</span>
            </div>
            <div>
              <span>{props.word[1]}</span>
            </div>
            {props.wordLength === 3 && (
              <div>
                <span>{props.word[2]}</span>
              </div>
            )}
          </div>

          <CgCheckR onClick={submitHanlder} className={classes["check-btn"]} />
        </div>
      )}
    </>
  );
};

export default Td;
