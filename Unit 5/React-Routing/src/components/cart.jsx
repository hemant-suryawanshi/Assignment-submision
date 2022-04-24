import { useEffect, useState } from "react";
// import "./Product.css";
// import { Link } from "react-router-dom";
import './navbar.css';

export const CartProduct = () => {
  const [cart, setcart] = useState([]);


  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/cart`)
      .then((d) => d.json())
      .then((data) => {
        setcart(data);
      });
  };

  return(
    <>
      <h1>Cart Product</h1>
      <div id="productpagecart">
        {cart.map((e)=>(
          <div key={e.id}>
             {/* <Link to={`/product/${e.id}`}> */}
            <div>
              <img src={e.image_url} id="imageofprod"/>
            </div>
            <div>
              <h3>{e.productName}</h3>
              <p id="priceta">Price: {e.price}$</p>
            </div>
            {/* </Link> */}
          </div>
          
        ))}

      </div>
      </>

  )

  
  
 
  }
