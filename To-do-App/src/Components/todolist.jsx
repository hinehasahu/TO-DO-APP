import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../Redux/actions";

function Todolist() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");
  let list = useSelector((state) => state.todo);
  console.log("LIST: ", list);

  const handleTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
console.log("Filter: ",filter)
  const filterTodo= list.filter(todo=>{
    if(filter==='completed'){
        return todo.completed
    }
    if(filter==='pending'){
        return !todo.completed
    }
    return true;
  })

  return (
    <div>
      <h1>Todo Lists</h1>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="write todo here.."
      />
      <button onClick={handleTodo}>Add</button>

      <select onChange={(e)=>setFilter(e.target.value)} name="f-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <div>
        {filterTodo && filterTodo.map((show) => (
          <p key={show.id}>
            {show.text}
            <button onClick={()=>dispatch(toggleTodo(show.id))}
              style={{
                backgroundColor: show.completed ? "lightgreen" : "ivory",
              }}>
              {show.completed ? "Completed" : "Mark as complete"}
            </button>{" "}
            <button onClick={()=>dispatch(deleteTodo(show.id))}>Delete</button>{" "}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
