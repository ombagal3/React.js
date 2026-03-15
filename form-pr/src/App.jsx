import Form from "./Components/Forma/Form"
import Navbar from "./Components/Navbar/Navbar"
import Feed from "./Components/Feed Page/Feed"
import Price from "./Components/Price/Price"
import { Routes, Route} from "react-router"


function App() {


  return (
    <>

      <Navbar/>
     <Routes>
      
   

    <Route path="/" element = { <Form/> }/>
     <Route path="/Feed" element = {<Feed/> }/>
     <Route path="/Price" element = {<Price/> } />

     </Routes>




     
    </> )
}

export default App
