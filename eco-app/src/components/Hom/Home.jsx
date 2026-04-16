import  React, {useEffect, useState} from "react";
import axios from "axios";
import ProductCart from "../Product-Cart/Product-Cart";


 const Home = () => {
  
  
  useEffect( () => { 

  fetchProducts ();

  },[]);

const [products, setProducts] = useState ([]);

// async function fetchProducts () {
//     const res = await fetch("https://dummyjson.com/products")
//     const data = await res.json();
//     setProducts(data.products)
//  }
const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products")
   setProducts(res.data.products)
 
}
  const addCart = (value) => { //jab add to card click krenge to ye fun call hoga
  console.log("fun is called !!")
  
    const cartList = JSON.parse(localStorage.getItem("cart")) || []; // is me new variable me localstorge she get kiya or store kiya


const res = cartList.findIndex((e) => e.name == value.name);
 
   if(res == -1){
 cartList.push(value)  
}   
if(res != -1){
cartList[res].qty++;

}                                 // is new me ek ek push hoga
 localStorage.setItem("cart", JSON.stringify(cartList)); 
  
           // or yaa ha she update ho ke local  storge jayga

 }
return<>

<div className=" d-flex justify-content-center flex-wrap gap-3 mt-4 mb-3">
 {
        products.map((product, i) => <ProductCart key={i}  name={product.title} img={product.images[0]} des={product.description} pri={product.price} rat={product.rating} avi={product.availabilityStatus} and={product.brand}  addCart={ addCart}/>)
    
      }
  </div>
    </>
}
export default Home; 