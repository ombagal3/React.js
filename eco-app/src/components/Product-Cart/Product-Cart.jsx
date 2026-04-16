import React from "react";
import { useNavigate } from "react-router";


const ProductCart = ({name, img, rat, avi, and, pri, des, addCart}) => {
 
  const navigate = useNavigate();
    return <>
      <div  className="card w-25" >
    <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title  text-start">{name}</h5>
    
    <p className=" text-start">
     {avi}
    </p>
    <div className="d-flex justify-content-between mt-2"> 
      <span className="fw-bolder">₹{pri}</span>
    <span className="fw-bolder  ">{rat}⭐</span>
    </div>
  <li className="list-group-item text-start fw-light mt-2">Brand:<span className="fw-medium">{and}</span></li>
    <div className="d-flex justify-content-between mt-3">
     <button onClick={() => addCart({name, qty:1, img, rat, avi, and, pri})} className="btn btn-outline-success">
      Add To
    </button>
    <span onClick= {() => {

      navigate("/View", { state: {name, img, pri, rat, avi, and, des}})
    }} className="btn btn-outline-primary ">View</span>
   </div>
  </div>
</div> 
     
    </>
}
export default ProductCart;