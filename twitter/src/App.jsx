import React from 'react'
import SignUp from '../Components/SignUp'
import Login from '../Components/SignIn'
import { Routes, Route } from 'react-router'
import HomePage from '../Components/HomePage'
import SignIn from '../Components/SignIn'
export default function App

() {
  return (
    <div>

<Routes >
<Route path='/' element={<SignUp/>}/>
<Route path='/Home' element={<HomePage/>}/>
<Route path='/SingIn' element={<SignIn/>}/>

</Routes>
      
    </div>
  )
}
