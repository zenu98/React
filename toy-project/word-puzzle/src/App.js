import Table from "./components/puzzle/Table";
import React, { useContext } from "react";
import Start from "./components/Start";
import { StartContext } from "./components/context/start-context";
import MainNavigation from "./components/UI/MainNavigation";
function App() {
  const startContext = useContext(StartContext);
  let content = <Start />;
  if (startContext.isSelected) {
    content = (
      <React.Fragment>
        <MainNavigation />
        <Table />
      </React.Fragment>
    );
  }
  return content;
}

export default App;
