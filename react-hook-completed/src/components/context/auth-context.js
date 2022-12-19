import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvier = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{ login: loginHandler, isAuth: isLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvier;
