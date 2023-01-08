import React, { useState } from "react";

export const StartContext = React.createContext({
  isAuth: false,
  puzzleWord: 0,
  login: () => {},
  twoWord: () => {},
  threeWord: () => {},
});

const StartContextProvier = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [puzzleWord, setPuzzleWord] = useState(0);

  const twoWordHandler = () => {
    setPuzzleWord(2);
  };

  const threeWordHandler = () => {
    setPuzzleWord(3);
  };

  const loginHandler = () => {
    setIsLogin(true);
  };

  return (
    <StartContext.Provider
      value={{
        login: loginHandler,
        isAuth: isLogin,
        twoWord: twoWordHandler,
        threeWord: threeWordHandler,
        puzzleWord: puzzleWord,
      }}
    >
      {props.children}
    </StartContext.Provider>
  );
};
export default StartContextProvier;
