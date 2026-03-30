import  React, {useEffect, useState} from "react";

 const Home = () => {
  
  useEffect( () => { 

  fetchProducts ();

  },[]);

const [products, setProducts] = useState ([]);

async function fetchProducts () {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json();
    setProducts(data.products)
 }

 const addCart = (product) => { //jab add to card click krenge to ye fun call hoga
  const cartList = JSON.parse(localStorage.getItem("cart")) || []; // is me new variable me localstorge she get kiya or store kiya
  cartList.push(product)                                      // is new me ek ek push hoga
  localStorage.setItem("cart", JSON.stringify(cartList));          // or yaa ha she update ho ke local  storge jayga

 }
return<>

<div className=" d-flex justify-content-center flex-wrap gap-3 mt-4 mb-3">
 {
        products.map((product, i) =>  <div key={i} className="card" style={{ width: "18rem", height: "39rem" }}>
    <img src={product.images[0]} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title  text-start">{product.title}</h5>
    <p className=" text-start">
     {product.description}
    </p>
   
   
    <div className="d-flex justify-content-between mt-2"> 
     
    <span className="fw-bolder">₹{product.price}</span>
    
    </div>
    
  <li className="list-group-item text-start fw-light mt-2">Brand:<span className="fw-medium">{product.brand}</span></li>

   <div className="d-flex justify-content-between mt-3">
     <button onClick={() => addCart(product)} className="btn btn-outline-success">
      Add To
    </button>
    <span className="fw-bolder btn btn-primary ">{product.rating}⭐</span>
   </div>
  </div>






        </div>)
       }
  </div>
    </>
}
export default Home;