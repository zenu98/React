import { createContext, useState } from "react";
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const aa = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return <ColorContext.Provider value={aa}>{children}</ColorContext.Provider>;
};
const ColorConsumer = ColorContext.Consumer;
// const { Consumer:ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
