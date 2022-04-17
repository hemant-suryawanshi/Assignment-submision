import { useEffect, useState } from "react";
import "./Product.css";

export const Product = () => {
  const [product, setproduct] = useState([]);
  const[filter,setfilter]=useState([])

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/user`)
      .then((d) => d.json())
      .then((data) => {
        setproduct(data);
        setfilter(data)
        // console.log(data);
      });
  };
  const handelchagne = (e) => {
   let a=e.target.value
   newarray=product.filter((e)=>e.Rating==a)
   setfilter(newarray)
  };

  const handelchagne2 = (e) => {
    let a=e.target.value
     newarray=product.filter((e)=>e.payment==a)
    setfilter(newarray)
   };

   const handelchagne3 = (e) => {
    let a=e.target.value
     if(a=="High"){
     var newarray=product.sort((a, b)=>{return a.cost02 - b.cost02})
     }else{
     var newarray=product.sort((a, b)=>{return b.cost02 - a.cost02})
     }
    console.log(newarray)
    setfilter(newarray)
   };

  return (
      <>
    <h1>Product Details</h1>
    <select onChange={handelchagne}>
          <option value="1">1 Star</option>
          <option value="2">2 Star</option>
          <option value="3">3 Star</option>
          <option value="4">4 Star</option>
          <option value="5">5 Star</option>
        </select>
        <select onChange={handelchagne2}>
          <option value="Cash">Cash Only</option>
          <option value="Card">Card Only</option>
          <option value="UPI">UPI only</option>
          <option value="All">All</option>
        </select>
        <select onChange={handelchagne3}>
          <option value="High">High to low</option>
          <option value="Low">Low to High</option>
        </select>
    <div id="productpage">
      {filter.map((e) => (
          <div>
           
          <div >
            <img src={e.img}></img>
          </div>
          <div>
            <h2>{e.name}</h2>
            <p>Raing: {e.Rating} Stars</p> <p>Payment Methoud:{e.payment}</p><p>Cost for 2 People : {e.cost02}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
