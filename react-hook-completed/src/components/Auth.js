import React, { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import Card from "./UI/Card";
import "./Auth.css";

const Auth = (props) => {
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>로그인 해주세요!</h2>
        <p>로그인을 하면 내용이 보입니다.</p>
        <button onClick={loginHandler}>로그인</button>
      </Card>
    </div>
  );
};

export default Auth;
