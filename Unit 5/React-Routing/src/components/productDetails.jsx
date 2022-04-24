import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import './navbar.css';



export const Proddetail = () => {
  const { id } = useParams();

  const [prod, setprod] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
      console.log(id)
    fetch(`http://localhost:8080/product/${id}`)
      .then((d) => d.json())
      .then((data) => {
        setprod(data);
      });
  };

  return (
    <div id="oneindprod">
        <div>
            <img src={prod.image_url} alt="" />
        </div>
        <div>
            <p>Brand Name: {prod.brandname}</p>
            <p>Product Name: {prod.productName}</p>
            <p>Price: {prod.price}</p>
            <p>Availabel: {prod.available}</p>
        </div>
        <button
        onClick={() => {
          console.log("clicked")
          fetch("http://localhost:8080/cart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(prod),
          })
        }}
      >
        add to cart
      </button>
    </div>
  );
};
