import Table from "./components/puzzle/Table";
import React, { useContext } from "react";
import Start from "./components/Start";
import { StartContext } from "./components/context/start-context";

function App() {
  const startContext = useContext(StartContext);
  let content = <Start />;
  if (startContext.isAuth) {
    content = <Table />;
  }
  return content;
}

export default App;
