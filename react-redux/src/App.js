import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Userprofile from "./components/UserProfile";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Userprofile />}

      <Counter />
    </Fragment>
  );
}

export default App;
