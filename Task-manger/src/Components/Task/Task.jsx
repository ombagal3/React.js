import { useState } from "react";


const Task = () => {

const [Todo, setTodo] = useState({}) || [];

localStorage.setItem("todo", JSON.stringify(Todo));


 

    const Todos = JSON.parse(localStorage.getItem("todo")) || [];

  return <>

  <div className="container justify-content-center align-items-center mt-4">


<h3>Task Manger Web App</h3>

<div className="text-center">
<input className="me-4" onChange={(e) => setTodo ({...Todo, tittle: e.target.value})}




id="tittle" type="text" placeholder="tittle"/>



<input className="ms-4"
onChange={(e) => setTodo ({...Todo, description: e.target.value})}

id="description" type="text" placeholder="description" />


<button  className="btn btn-secondary ms-3">Add Todo</button>

</div>





  </div>
   <div className="container justify-content-center align-items-center m-5">

    <div id="card" className="card shadow ">
        <p>{Todos.tittle}</p>
        <p>{Todos.description}</p>

         <li className="nav-item dropdown">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Link
  </a>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Completed
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Running
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item" href="#">
      Pending
      </a>
    </li>
  </ul>
</li>

    </div>

   </div>

    
    </>
}
export default Task;