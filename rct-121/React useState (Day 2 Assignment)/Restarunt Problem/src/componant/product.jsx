import { useEffect, useState } from "react";
import "./Product.css";

export const Product = () => {
  const [product, setproduct] = useState([]);
  const [star, setStar] = useState("6");
  const [payment, setPayment] = useState("none");
  const [sort, setSort] = useState("nor");

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/user`)
      .then((d) => d.json())
      .then((data) => {
        console.log(data);
        setproduct(data);
      });
  };
  const handelSort = (by) => {
    if (by == "High") {
      let sorted = product.sort((a, b) => {
        return a.costForTwo - b.costForTwo;
      });

      let newData = [...sorted];
      setproduct(newData);
    } else if (by == "Low") {
      let sorted = product.sort((a, b) => {
        return b.costForTwo - a.costForTwo;
      });
      let newData = [...sorted];
      setproduct(newData);
    } else if (by == "nor") {
      getdata();
    }
  };

  const paymentMethoudfilter = (product) => {
    if (payment === "none") {
      return true;
    } else if (payment === "Cash") {
      if (
        product.payment_methods.cash == true &&
        product.payment_methods.card == false
      ) {
        return true;
      }
    } else if (payment === "Card") {
      if (
        product.payment_methods.card == true &&
        product.payment_methods.cash == false
      ) {
        return true;
      }
    } else if (payment === "All") {
      // if (product.payment_methods.cash==true && product.payment_methods.card==true) {
      return true;
      // }
    }
  };

  return (
    <>
      <h1>Product Details</h1>
      <select
        onChange={(e) => {
          setStar(e.target.value);
        }}
      >
        <option value="6">Filter By Rating</option>
        <option value="1">1 Star and bellow</option>
        <option value="2">2 Star and bellow</option>
        <option value="3">3 Star and bellow</option>
        <option value="4">4 Star and bellow</option>
        <option value="5">5 Star and bellow</option>
      </select>

      <select
        onChange={(e) => {
          setPayment(e.target.value);
        }}
      >
        <option value="none">Check Payment Methoud</option>
        <option value="Cash">Cash Only</option>
        <option value="Card">Card Only</option>
        <option value="All">All</option>
      </select>

      <select
        onChange={(e) => {
          handelSort(e.target.value);
        }}
      >
        <option value="nor">Sort</option>
        <option value="High">low to High</option>
        <option value="Low">High to Low</option>
      </select>
      <div id="productpage">
        {product
          .filter((item) => item.rating <= star)
          .filter(paymentMethoudfilter)
          .map((item) => (
            <div id="productCard">
              <div id="imgDiv">
                <img src={item.src}></img>
              </div>
              <div id="textDiv">
                <div id="colinetext">
                  <p>{item.name}</p>
                  <p>{item.rating}</p>
                </div>
                <div id="colinetext">
                  <p>{item.cuisine}</p>
                  <p>{item.votes}</p>
                </div>
                <div id="colinetext">
                  <p>{item.costForTwo}</p>
                  <p>{item.reviews}</p>
                </div>
                <div id="colinetext">
                  <p>{item.minOrder}</p>
                  <p>{item.deliveryTime}</p>
                </div>
                <div id="colinetext">
                  <p>Cash:{item.payment_methods.cash ? "YES" : "No"}</p>
                  <p>Card:{item.payment_methods.card ? "YES" : "No"}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
