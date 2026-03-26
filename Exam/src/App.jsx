

import Home from './Components/Home/Home,';
import Save  from './Components/Save/Save';
import { Routes, Route} from "react-router";
function App() {
 

  return (
    <>
     <Routes >

      <Route path='/' element={<Home/>}></Route>
      <Route path='/Save' element={<Save/>}></Route>
   
     </Routes>
    </>
  )
}

export default App;
