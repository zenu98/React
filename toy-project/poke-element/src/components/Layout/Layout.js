import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import classes from "./Layout.module.css";
import Main from "./Main";
import ResultPage from "./ResultPage";
import TypePage from "./TypePage";

const Layout = () => {
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Main />
          </div>
          <div className="section">
            <TypePage />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />;
};
ReactDOM.render(<Layout />, document.getElementById("root"));
export default Layout;
