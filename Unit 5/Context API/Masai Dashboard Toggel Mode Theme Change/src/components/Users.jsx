import { useContext, useEffect, useState } from "react";
import React from 'react';

import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const ActiveUser = styled.div`
position: absolute;
left: 8.54%;
right: 60.07%;
top: 20%;
bottom: 39.65%;

box-shadow:${props => props.theme=="Dark" ?  " 0px 1px 4px rgba(0, 0, 0, 0.2)" :"0px 1px 4px #50535b"};
border-radius: 5px;
height: 450px;
color: ${props => props.theme=="Dark" ?  "white" :" #292E33"}; 
background-color: ${props => props.theme=="Dark" ? " #292E33" : "white"};
`
const User = () => {
   
    return (   
      <ActiveUser  className="Home">      
    
        <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Yogesh Bhat</p>
          </div>

          <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Arjun_3848ab5fe7.jpg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Arjun Thakur</p>
          </div>

          <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Ritesh_Firodiya_4_8a667ac9c8.jpg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Ritesh Firodiya</p>
          </div>

          <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Albert Sabastine</p>
          </div>

          <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/aman_fbbc8625a4.jpg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Aman Wats</p>
          </div>

          <div style={{display:"flex",margin:"15px"}}>  
       <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/swanand_d399feddf5.jpeg" alt="" style={{marginLeft:"30px" ,width:"50px",borderRadius:"25px"}} />     
       <p style={{marginLeft:"30px"}} >Swanand Kadam</p>
          </div>
          
      </ActiveUser>   
    )             
     }
  export default User;
