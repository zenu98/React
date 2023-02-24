import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => id !== item.id);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
};

export default App;
