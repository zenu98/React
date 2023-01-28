import React, { Fragment } from "react";
import Element from "./components/Element/Element";
import Header from "./components/Layout/Header";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Element />
      </Layout>
    </Fragment>
  );
}

export default App;
