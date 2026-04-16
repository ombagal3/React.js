import { useState } from "react";
 

const Navbar =  () => {
 

const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")))|| [] ;
 const [search, setSearch] = useState("");

const serachProduct = () => {
 setProducts(products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())))



console.log(serachProduct)
}
    return <>
<nav className="navbar container-fluid bg-body-tertiary ">
  <div className="container-fluid d-flex justify-align-content-around">
    <a className="navbar-brand">Navbar</a>


    <form className="d-flex" role="search">
     <div className="me-5 d-flex" >
       <input
      onChange={(e) => setSearch(e.target.value)}
        className="me-2"
        type="text"
        placeholder="Search"
      
      />
      <button className="btn btn-info" onClick={serachProduct }>Search</button></div>
      <a href="/Cart" className="btn btn-outline-success"  >
        Cart
      </a>
    </form>
  </div>
</nav>
    
    </>
}
export default Navbar;