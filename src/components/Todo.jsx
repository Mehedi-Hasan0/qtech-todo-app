import { useToDos } from "../context/TodoContext";
import Button from "./shared/Button";

const Todo = () => {
  const { todo, handleToggleToDo, deleteToDo } = useToDos();

  // sorting based on
  return (
    <div className="flex flex-col max-w-[300px] sm:min-w-[550px] md:min-w-full pt-3">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 flex justify-center items-center"
                  >
                    Complete
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {todo &&
                  todo?.length !== 0 &&
                  todo?.map((todo, i) => {
                    return (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {i + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 min-w-[120px]">
                          {todo?.completed === false
                            ? "Incomplete"
                            : "Completed"}
                        </td>
                        <td
                          className={`whitespace-wrap px-6 py-4 min-w-[200px] ${
                            todo?.completed === true ? "line-through" : ""
                          }`}
                        >
                          {todo?.task}
                        </td>
                        <td>
                          <div className="flex justify-center items-center py-4">
                            <input
                              type="checkbox"
                              checked={todo?.completed}
                              onChange={() => {
                                handleToggleToDo(todo?.id);
                              }}
                              className=" w-5 h-5 cursor-pointer"
                            />
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center">
                            <Button
                              name="Edit"
                              style="px-3 2xl:px-4 bg-[#78de9c] hover:bg-[#68b984] transition duration-200 ease-in"
                            />
                          </div>
                        </td>
                        <td>
                          <div
                            className="flex justify-center"
                            onClick={() => {
                              deleteToDo(todo?.id);
                            }}
                          >
                            <Button
                              name="Delete"
                              style="px-3 2xl:px-4 bg-red-500"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
