
import {useEffect, useState} from 'react'

const  Cart  = () => {


  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart"))||[]);

  const[total, setTotal] = useState(0);

  useEffect(()=>{
    countTotal();
  },[products])

 const RemoveCart = (index) => {
    const newCart = products.filter((_, i) => i !== index);

    setProducts(newCart)
    localStorage.setItem("cart",JSON.stringify(newCart));

  };

  const countTotal = () => {
    console.log(products)
    let sum = 0;
    products.forEach(element => {
      sum = sum + (element.pri * element.qty);
    });
    console.log(sum)
    setTotal(sum)
  }


 return <>
 <div className='d-flex justify-content-center flex-column align-items-center mt-3  mb-3 gap-3 h-100'>
  {products.map((product, i) => <div key={i} className="card flex-row  "  style={{ width: "32rem", height:"15rem" }}>

 <img src={product.img} className="card-img-top" alt="..." />
  <div className="card-body text-start pe-5
   ">
    <h5 className="card-title mt-2">{product.name}</h5>
     <p className="text-start">
     {product.description}
    </p> 
         <div className='d-flex justify-content-between mt-3'>
      <span className="fw-bolder">₹{product.pri}</span>
     <span className="fw-bolder ">{product.rat}⭐</span></div>

      <div className='d-flex justify-content-between mt-3'>



      <button onClick={ () => { 
        countTotal(product.qty++)
        
      }} className='btn btn-success'>+ </button>



      <button onClick={ () => {
       
        if (product.qty > 1) {
      countTotal(product.qty--);
    }
      
        
        }} disabled={product.qty === 1} className='btn btn-warning'>-</button>
     </div> 
  
     <div className='d-flex justify-content-between gap-2 mt-3 '>
             <p className='fw-bolder'>Qty:{product.qty}</p>
 <button onClick={() => RemoveCart (i)} className='ms-5 btn btn-danger'>Remove</button>

     </div>
   </div>
</div>)}
 <div className='d-flex justify-content-start  container '>

    <p className='text-start fw-bold '>Total:{Math.floor(total)} </p>
  </div>
 </div>
  
 
 </>
}
export default Cart;