import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../features/todo_slice.js";

export default function Todo() {
  const TodoList = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [isUpdate, setUpdate] = useState({ index: -1, status: false });
  const [done, setDone] = useState({ index: -1, status: false });
  return (
    <div className="container d-flex justify-content-center ">
      <div className="col-9 ">
        <div className="d-flex justify-content-around px-3 py-5 m-3 rounded shadow bg-dark text-light">
          <input
            type="text"
            value={text}
            placeholder="workout, read book etc..."
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className={`btn ${isUpdate.status ? "btn-warning" : "btn-primary"} w-25`}
            onClick={() =>
              dispatch(
                isUpdate.status
                  ? updateTodo({ text, index: isUpdate.index })
                  : addTodo({ text, status: false }),
              )
            }
          >
            {isUpdate.status ? "Edit Todo" : "Add Todo"}
          </button>
        </div>

        <div
          style={{ height: "450px" }}
          className="d-flex flex-column p-3 mt-5 rounded shadow bg-dark text-light overflow-auto hide-scrollbar"
        >
          {TodoList.map((todo, i) => (
            <div key={i}>
              <div
                className={`p-4 m-2 shadow rounded d-flex justify-content-between border ${done.status ? "border-success" : "border-danger"}`}
                key={i}
              >
                <p>{todo.text}</p>
                <span className="">
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => dispatch(removeTodo(i))}
                  >
                    remove
                  </button>

                  <button
                    className="btn btn-info mx-2"
                    onClick={() => {
                      setText(todo.text);
                      setUpdate({ index: i, status: true });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className={`btn ${done ? "btn-success" : "btn-warning"}`}
                    onClick={() => {
                      {
                        done
                          ? setDone({ index: -1, status: false })
                          : setDone({ index: i, status: true });
                      }
                    }}
                  >
                    Done
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
