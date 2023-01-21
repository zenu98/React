import React, { Fragment } from "react";
import Example from "./components/Example";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Layout>
        <Example />
      </Layout>
    </Fragment>
  );
}

export default App;
