import React, { useState } from "react";

export const StartContext = React.createContext({
  isSelected: false,
  puzzleWord: 0,
  select: () => {},
  twoWord: () => {},
  threeWord: () => {},
});

const StartContextProvier = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [puzzleWord, setPuzzleWord] = useState(0);

  const twoWordHandler = () => {
    setPuzzleWord(2);
  };

  const threeWordHandler = () => {
    setPuzzleWord(3);
  };

  const selectHandler = () => {
    setIsSelected(true);
  };

  return (
    <StartContext.Provider
      value={{
        select: selectHandler,
        isSelected: isSelected,
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
