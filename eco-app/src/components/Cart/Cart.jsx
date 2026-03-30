
import React, {useState} from 'react'
const  Cart  = () => {


  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  

 const RemoveCart = (index) => {
    const newCart = products.filter((_, i) => i !== index);

    setProducts(newCart)
    localStorage.setItem("cart",JSON.stringify(newCart));

  };

 return <>
 <div className='d-flex justify-content-center flex-column align-items-center mt-3 mb-3 gap-3 h-100'>
  {products.map((product, i) => <div key={i} className="card flex-row"  style={{ width: "48rem", height: "15rem" }}>

 <img src={product.images[0]} className="card-img-top" alt="..." />
  <div className="card-body text-start 
  ">
    <h5 className="card-title mt-2">{product.title}</h5>
    <p className="text-start">
     {product.description}
    </p>
         <div className='d-flex justify-content-between mt-3'>
      <span className="fw-bolder">₹{product.price}</span>
     <span className="fw-bolder ">{product.rating}⭐</span></div>
     <div className='d-flex justify-content-between mt-3'>
<button className='btn btn-outline-secondary'>View </button>
<button onClick={() => RemoveCart (i)} className='btn btn-danger'>Remove</button>

     </div>

   </div>

   
   



  </div>)}
 </div>
 
 </>
}
export default Cart;