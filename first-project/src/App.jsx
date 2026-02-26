
 import "./App.css"
 import Fruits from "./data.js";
 import {My, bag} from "./data.js";

const App = () => <>

{ Fruits.map(Fruit => <p>{Fruit}</p> )}

{My.map((a) => <p>{a} </p>)}

{bag.map((b) => <p>{b}</p> )}
</>
export default App;