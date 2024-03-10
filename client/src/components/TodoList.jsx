import { useState } from "react";

const TodoList = ({ val, index, setTodoList, todoList }) => {
  const [isEdit, setIsEdit] = useState();
  const [updateTodo, setUpdateTodo] = useState(false);

  const handleDelete = (id) => {
    const FilterArray = todoList.filter((val, index) => index !== id);
    setTodoList(FilterArray);
  };

  const handleEdit = (id) => {
    const previousVal = todoList.find((val, index) => index === id);
    setUpdateTodo(previousVal);
    setIsEdit(id);
  };

  const handleUpdate = (id) => {
    const updatedArray = todoList.map((val, index) =>
      index === id ? updateTodo : val
    );
    setTodoList(updatedArray);
    setIsEdit(false);
  };

  return (
    <>
      {isEdit !== index ? (
        <div className="bg-red-300 flex justify-between items-center w-1/2 m-auto rounded-lg p-6 mt-10 font-semibold text-lg">
          <div className="rounded-lg px-8 text-white mx-4 cursor-pointer font-semibold"></div>
          <div>{val}</div>
          <div>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => handleEdit(index)}
              className="bg-blue-400 rounded-lg px-4 text-white mx-2 cursor-pointer font-semibold"
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => handleDelete(index)}
              className="bg-blue-400 rounded-lg px-4 text-white mx-2 cursor-pointer font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-red-300 flex justify-between items-center w-1/2 m-auto rounded-lg p-6 mt-10 font-semibold text-lg">
          <div className="rounded-lg px-8 text-white mx-4 cursor-pointer font-semibold"></div>
          <input
            type="text"
            onChange={(e) => setUpdateTodo(e.target.value)}
            value={updateTodo}
            className="border pl-1 rounded-lg w-5/12 text-center"
          />
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => handleUpdate(index)}
            className="bg-blue-400 rounded-lg px-4 text-white mx-2 cursor-pointer font-semibold"
          >
            update
          </button>
          <button
            style={{ marginLeft: "5px" }}
            onClick={() => setIsEdit(false)}
            className="bg-blue-400 rounded-lg px-4 text-white mx-2 cursor-pointer font-semibold"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default TodoList;
