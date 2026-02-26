
import { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    return <>
     <h1>{count}</h1> 
    <div className="m-5">
     <button className="m-3" onClick={()=> setCount(count + 1)}>++</button>
     <button className="m-3" onClick={()=> setCount(count - 1)}>- 1</button>
     <button className="m-3" onClick={()=> setCount(count * 2)}>* 2</button>
     <button className="m-3" onClick={()=> setCount(count / 2)}>/</button>
    </div>
     </>
}
export default Counter;