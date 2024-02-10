import React, { createContext, useState, useContext, useEffect } from "react";

const todosContext = createContext(undefined);

// Type of ToDo context
const TodoContext = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const data = localStorage.getItem("todos") || "[]";
    return JSON.parse(data);
  });
  const [totalTask, setTotalTask] = useState(todo.length);
  const [completedTask, setCompletedTask] = useState(filterCompletedTodo(todo));

  // generating random ID
  const generateId = Math.floor(Math.random() * 100000000) + 1;

  // filter function to filter completed todo
  function filterCompletedTodo(arr) {
    const completedTodo = arr?.filter((todo) => todo.completed === true);
    return completedTodo.length !== 0 ? completedTodo.length : 0;
  }

  const handleAddToDo = (task) => {
    // saving todo in localstorage
    setTodo((prev) => {
      const newTodos = [
        {
          id: generateId.toString(),
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

  useEffect(() => {
    // saving totalTask & completedTask based on any create/delete of todo
    setTotalTask(todo.length);

    setCompletedTask(filterCompletedTodo(todo));
  }, [todo]);

  return (
    <todosContext.Provider
      value={{
        todo,
        handleAddToDo,
        handleToggleToDo,
        deleteToDo,
        totalTask,
        completedTask,
      }}
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
