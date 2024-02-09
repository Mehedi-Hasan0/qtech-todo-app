const Todo = () => {
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
                  <th scope="col" className="px-6 py-4">
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
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-wrap px-6 py-4 min-w-[200px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Porro, vel nemo! Blanditiis, a repellendus voluptatem quia
                    laudantium quae iusto numquam quibusdam eum nobis. Quas
                    laudantium mollitia aut modi! Reiciendis, rerum?
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
