import { useSelector, useDispatch } from "react-redux";
import { RemoveTodo } from "../Features/Todo/TodoSlice";

const AllTodo = () => {
  const allTodos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deletes = (id) => {
    setTimeout(() => {
      dispatch(RemoveTodo(id));
    }, 50);
  };

  return (
    <div className="mx-auto w-6/12 my-4">
      <h1 className="text-4xl">All Todos!</h1>
      <ul>
        {allTodos.map((todo) => (
          <li className="flex justify-between my-2" key={todo.id}>
            <p className="w-[75%] text-2xl">{todo.text}</p>
            <button
              className="w-[23%] bg-red-500 text-white"
              onClick={() => deletes(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodo;
