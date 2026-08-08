import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchBooks, postBooks, deleteBooks } from "../features/bookSlice";

export default function Book() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  const titleRef = useRef("");
  const authorRef = useRef("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <div>
        <input ref={titleRef} type="text" />
        <input ref={authorRef} type="text" />
        <button
          onClick={() =>
            dispatch(
              postBooks({
                title: titleRef.current.value,
                author: authorRef.current.value,
                }),
            )
          }
        >
          Add Book
        </button>
      </div>
      {books.map((book, i) => (
        <div key={i}>
          <p>{book.title}</p>
          <i>{book.author}</i>
          <button
            onClick={() => {
              dispatch(deleteBooks(book.id));
            }}
          >
            {" "}
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
