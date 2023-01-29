import React, { Fragment } from "react";
import Element from "./components/Element/Element";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout/Layout";
import Main from "./components/Layout/Main";
import TypePage from "./components/Layout/TypePage";

function App() {
  return (
    <Fragment>
      <Main />
      <TypePage />
    </Fragment>
  );
}

export default App;
