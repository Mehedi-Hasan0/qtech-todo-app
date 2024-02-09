import React, { createContext, useState, useContext } from "react";

const todosContext = createContext(undefined);

// Type of ToDo context
const TodoContext = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const data = localStorage.getItem("todos") || "[]";
    return JSON.parse(data);
  });

  const generateId = Math.floor(Math.random() * 10) + 1;

  const handleAddToDo = (task) => {
    setTodo((prev) => {
      const newTodos = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleToggleToDo = (id) => {
    setTodo((prev) => {
      const newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const deleteToDo = (id) => {
    setTodo((prev) => {
      const newToDos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newToDos));
      return newToDos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todo, handleAddToDo, handleToggleToDo, deleteToDo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodoContext;

export const useToDos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
};
