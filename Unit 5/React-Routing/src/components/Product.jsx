import { useEffect, useState } from "react";
// import "./Product.css";
import { Link } from "react-router-dom";
import './navbar.css';

export const Product = () => {
  const [product, setproduct] = useState([]);


  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/product`)
      .then((d) => d.json())
      .then((data) => {
        setproduct(data);
        console.log(data)
       
      
      });
  };

  return(
    <>
      <h1>Hair Product</h1>
      <div id="productpagecart">
        {product.map((e)=>(
          <div key={e.id}>
             <Link to={`/product/${e.id}`}>
            <div>
              <img src={e.image_url} id="imageofprod"/>
            </div>
            <div>
              <h3>{e.productName}</h3>
              <p id="priceta">Price: {e.price}$</p>
            </div>
            </Link>
          </div>
          
        ))}

      </div>
      </>

  )

  
  
 
  }
