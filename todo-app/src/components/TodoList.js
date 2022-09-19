import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
const TodoList = ({ a, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {a.map((b) => (
        <TodoListItem
          c={b}
          key={b.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
