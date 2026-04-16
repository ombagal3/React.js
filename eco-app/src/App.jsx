import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Hom/Home'
import Cart from './components/Cart/Cart'
import View from './components/View/View'
import { Routes, Route}from 'react-router'


export default function App() {
  return (
   <>
    <Navbar/>
  <Routes>
     
    <Route  path='/' element= {<Home/>}   />
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/View' element={<View/>}/>


  </Routes>
   
   </>
  )
}
