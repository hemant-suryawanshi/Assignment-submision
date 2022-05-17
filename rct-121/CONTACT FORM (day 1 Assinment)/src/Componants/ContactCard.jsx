import { useState } from "react";
import "./module.css";
const ContactCard = ({ id, img, name, phone,email  }) => {
  const [check,setCheck]=useState(false)
  return (
    <div id="carddiv" onClick={()=>setCheck(!check)}>
     <div id="imgdiv">
       <img src={img}></img>

     </div>
     <div id="textdiv">
       <p style={{fontWeiht:"650",fontSize:"25px",color:"#069A8E"}}>Name: {name}</p>
       <p>Email: {email}</p>
       {check && <div style={{fontWeiht:"650",fontSize:"15px",color:"#F55353"}}>phone:{phone}</div>}
     </div>
    </div>
  );
};

export default ContactCard;
