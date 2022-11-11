import React, { useState } from "react";
import InfoInput from "./components/InfoInput";
import UsersList from "./components/UsersList";

function App() {
  const [list, setList] = useState([]);

  const onAddListHandler = (uname, uage) => {
    setList((prevList) => {
      const updateList = [...prevList];
      updateList.unshift({
        name: uname,
        age: uage,
        id: Math.random().toString(),
      });
      return updateList;
    });
  };

  let content;
  if (list.length > 0) {
    content = <UsersList users={list} />;
  }

  return (
    <div>
      <InfoInput onAddList={onAddListHandler} />
      {content}
    </div>
  );
}

export default App;
