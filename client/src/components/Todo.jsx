import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  const handleClick = () => {
    setTodoList([...todoList, input]);
  };

  return (
    <>
      <div className="bg-green-300 w-1/2 m-auto rounded-lg p-6 mt-10">
        <input
          type="text"
          className="border pl-1 rounded-lg w-5/12 text-center"
          onChange={handleChange}
          value={input}
        />
        <button
          onClick={handleClick}
          className="bg-blue-400 rounded-lg px-4 text-white mx-2 cursor-pointer font-semibold"
        >
          Add
        </button>
      </div>
      {todoList.length===0 ? (
        <h1 className="bg-red-300 w-1/2 m-auto rounded-lg p-6 mt-10 font-bold">No Items in List</h1>
      ) : (
        todoList?.map((val, index) => (
          <TodoList
            val={val}
            index={index}
            setTodoList={setTodoList}
            todoList={todoList}
          />
        ))
      )}
    </>
  );
}
