import React from 'react';

import {useLocation } from 'react-router'

const View = ( ) => {

const {state} = useLocation();


return <>

<div  className="d-flex justify-content-center ">
 <div  className='w-25 text-start'>
     <img src={state.img} className="card-img-top" alt="..." />

    <p className='fw-bold py-1'>{state.name}</p>
    <p>{state.des}</p>
<p className=" text-start">
     {state.avi}
    </p>
    <div className="d-flex justify-content-between mt-2"> 
      <span className="fw-bolder">₹{state.pri}</span>
    <span className="fw-bolder">{state.rat}⭐</span>
    </div>

    







</div>





</div>


</>


}
export default View;