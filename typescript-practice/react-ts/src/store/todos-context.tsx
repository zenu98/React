import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const ctxValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeHandler,
  };

  return (
    <TodosContext.Provider value={ctxValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
