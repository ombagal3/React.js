import { products } from "../products.js";
import { useState, useEffect } from 'react';

const Products = () => {
    const[total, setTotal] = useState(0);
   
    useEffect(() => {
        countTotal ();
    }, [])

    const countTotal = () => {
       let sum = 0;
       products.forEach((product) => {
        sum = sum + product.price;
        
       });
       setTotal(sum);
    }
    
    return <> 
    <div className='card'>
        <p className='title'>Total:{total} </p>
    </div>
      {products.map((product, i)=> <div className='card' key={i}>
    <p className='title'>{product.title}</p>
   <p>{product.description}</p>
   <p className='price'>{product.price}</p>
    </div> )}
    
    
    </>
}


export default Products;