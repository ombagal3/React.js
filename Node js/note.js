// To Create React Project Vite
// 1. npm create vite@latest first-project
// 2. ok to proceed click press : y
// 3. Select a framework to : React
// 4. Select a variant in a :  JavaScript
// 5. Use vite 8 beta (Experimental)? to select : No
// 6. Install with npm and start now : Yes

  // cd -> change directory -> 


// PS C:\Users\Shree\OneDrive\React> cd first-project : ye krne she ham React ke ander first project me chale jaynge
// PS C:\Users\Shree\OneDrive\React\first-project> npm run dev   : fir ye krne she project live kr sakte hai


// Node Modules -> all modules
// Public folder -> to store all assets like a images....
// Src -> your all code will be here.... 
// gitignore -> files or folder which you dont want to upload in github


// React Js + Next Js

// jsx -> js + xml -> JavaScript + html  // jsx ka matlb ham is me javascript or html likh skate hai


// component -> block of UI





import { useState, useEffect } from "react";

const TextUtils = () => {

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [countWord, setCountWord] = useState(0);
  const [second, setSecond] = useState(0);


  useEffect(() => {
    setText(localStorage.getItem("text") || "");
    setCount(Number(localStorage.getItem("count")) || 0);
    setCountWord(Number(localStorage.getItem("word")) || 0);
    setSecond(Number(localStorage.getItem("second")) || 0);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center p-3">Text Utils</h2>

        <div className="container">
          <div className="form-floating">
            <textarea
              value={text}
              onChange={(e) => {
                const value = e.target.value;
                setText(value);
                localStorage.setItem("text", value);
              }}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 220 }}
            ></textarea>

            <label htmlFor="floatingTextarea2">enter your text</label>
          </div>

          <div>
     
            <button
              onClick={() => {
                const upper = text.toUpperCase();
                setText(upper);
                localStorage.setItem("text", upper);
              }}
              className="m-2 btn btn-outline-primary"
            >
              To UpperCase
            </button>

    
            <button
              onClick={() => {
                const lower = text.toLowerCase(); setText(lower);
                localStorage.setItem("text", lower);
              }}
              className="m-2 btn btn-outline-warning"
            >
              To Lowercase
            </button>

            <button
              onClick={() => {
                const letterCount = text.length;
                setCount(letterCount);
                localStorage.setItem("count", letterCount.toString());
              }}
              className="m-2 btn btn-outline-info"
            >
              Counts Letters
            </button>

      
            <button
              onClick={() => {
                const words =
                  text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
                setCountWord(words);
                localStorage.setItem("word", words.toString());
              }}
              className="m-2 btn btn-outline-secondary"
            >
              Counts Words
            </button>

           
            <button
              onClick={() => {
                const sec = Math.floor((text.length * 60) / 160);
                setSecond(sec);
                localStorage.setItem("second", sec.toString());
              }}
              className="m-2 btn btn-outline-success"
            >
              Check Reading Time
            </button>

          
            <button
              onClick={() => {
                setText("");
                setCount(0);
                setCountWord(0);
                setSecond(0);
                localStorage.clear();
              }}
              className="m-2 btn btn-outline-danger"
            >
              Clear Text
            </button>
          </div>

          <hr />

          <div className="m-3">
            {text}

            <p className="mt-3 fw-bold">Text Count : {count}</p>
            <p className="fw-bold">Words Count : {countWord}</p>
            <p className="fw-bold">
              Check Reading Time : {second} sec
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextUtils;