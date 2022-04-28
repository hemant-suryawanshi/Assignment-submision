import { useContext, useEffect, useState } from "react";
import React from 'react';
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";

const Timepassdetails = styled.div`
position: absolute;
left: 8.54%;
right: 60.07%;
top: 20%;
bottom: 39.65%;

border-radius: 5px;
height: 400px;
color: ${props => props.theme=="Dark" ?  "white" :" #000000"}; 
background-color: ${props => props.theme=="Dark" ? " #000000" : "white"};
`
const UserDetail = () => {
    const  {theme} = useContext(ThemeContext); 
    const {id} = useParams();
    return (   
      <Timepassdetails theme={theme} className="Home"> 
     <div>
     User ID : {id} 
     </div>  
      </Timepassdetails>         
) 
     }
  export default UserDetail;