import React, { useState } from "react";

export const StartContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const StartContextProvier = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };

  return (
    <StartContext.Provider value={{ login: loginHandler, isAuth: isLogin }}>
      {props.children}
    </StartContext.Provider>
  );
};
export default StartContextProvier;
