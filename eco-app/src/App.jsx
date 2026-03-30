import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Hom/Home'
import Cart from './components/Cart/Cart'
import { Routes, Route}from 'react-router'


export default function App() {
  return (
   <>
    <Navbar/>
  <Routes>
     
    <Route  path='/' element= {<Home/>}   />
    <Route path='/Cart' element={<Cart/>}/>


  </Routes>
   
   </>
  )
}
