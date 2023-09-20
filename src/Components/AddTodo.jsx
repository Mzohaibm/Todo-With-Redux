import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Features/Todo/TodoSlice";

const AddTodos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const updateTodo = (e) => {
    setTodo(e.target.value);
  };
  const addTodos = (e) => {
    e.preventDefault();
    if (todo.trim().length !== 0) {
      dispatch(AddTodo(todo));
      setTodo("");
    }
  };
  return (
    <div className="mx-auto w-6/12 my-4">
      <form className="flex justify-between" onSubmit={addTodos}>
        <input
          className="w-[75%] px-3 py-2 border border-green-500 focus:outline-1 outline-green-500"
          type="text"
          placeholder="Add to do...."
          onChange={updateTodo}
          value={todo}
        />
        <button
          className="w-[23%] px-3 py-2 bg-green-500 text-white"
          type="submit"
        >
          Add to Do
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
