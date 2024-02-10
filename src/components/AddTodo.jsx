import { useState } from "react";
import { useToDos } from "../context/TodoContext";
import Button from "./shared/Button";

const AddTodo = () => {
  // CONTEXT variables
  const { handleAddToDo } = useToDos();
  // STATE
  const [toDo, setToDo] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // saving todos to localstorage and to the context
    handleAddToDo(toDo);

    // making todo empty for new todo
    setToDo("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="sub-container flex items-center gap-5"
    >
      <input
        type="text"
        value={toDo}
        onChange={(e) => {
          setToDo(e.target.value);
        }}
        placeholder="Write your task here..."
        className="border border-[#ccc] rounded w-full py-1 px-2 placeholder:text-sm placeholder:2xl:text-base"
      />
      <Button name="Add" style="px-6 2xl:px-8 bg-[#68b984]" />
    </form>
  );
};

export default AddTodo;
