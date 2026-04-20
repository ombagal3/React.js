import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo_slice.js";

export default function Todo() {
  const TodoList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="todo"
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => dispatch(addTodo(text))}>Add</button>
      </div>

      <div>
        {TodoList.map((todo, i) => (
          <div key={i}>
            <div>
              <p>{todo}</p>
              <button onClick={() => dispatch(removeTodo(i))}>remove</button>

              
             <button onClick={() => {
  const updatedText = prompt("Enter new todo", todo);
  if (updatedText) {
    dispatch(updateTodo({ index: i, newText: updatedText }));
  }
}}>
  update
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
