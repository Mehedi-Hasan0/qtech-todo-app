import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoCounter from "./components/TodoCounter";

const App = () => {
  return (
    <main className="main-container flex flex-col justify-center items-center gap-8 custom-scrollbar overflow-hidden">
      <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold">
        Qtech Todo App
      </h2>
      <Navbar />
      <AddTodo />
      <TodoCounter />
      <Todo />
    </main>
  );
};

export default App;
