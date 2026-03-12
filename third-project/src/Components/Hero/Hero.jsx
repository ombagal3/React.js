
import { Carts } from "./Api";

const Hero = () => {



     return <>
     {Carts.map((cart, i ) => <div className="card" style="width: 18rem;" key={i} >

  <img src="{product.images[0]}" className="card-img-top" > </img>

  <div className="card-body">
    <h5 className="card-title">{cart.title}</h5>
    <p className="card-text">{cart.description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Prise {cart.price}</li>
    <li className="list-group-item"> 
     <span className="badge rounded-pill text-bg-info">{cart.discountPercentage}</span>
     <span className="badge rounded-pill text-bg-info">{cart.rating}⭐</span>
     </li>
    <li className="list-group-item">Brand {cart.brand}</li>
  </ul>
  <div className="card-body">
    <button className="btn btn-primary">View</button>
    <button onclick='addToCart({JSON.stringify(product)})' className="btn btn-success">Add to cart</button>
  </div>
</div>)}
     
     
     </>
};
export default Hero;