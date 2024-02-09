import Button from "./shared/Button";

const AddTodo = () => {
  return (
    <form className="sub-container flex items-center gap-5">
      <input
        type="text"
        className="border border-[#ccc] rounded w-full py-1 px-2"
      />
      <Button name="Add" />
    </form>
  );
};

export default AddTodo;
