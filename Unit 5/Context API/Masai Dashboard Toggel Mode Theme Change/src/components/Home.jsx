import { useContext } from "react";
import React from 'react';

import styled from "styled-components";
import User from "./Users";
import Toggle from "./Toggle";
import "./Home.css"
import { ThemeContext } from "../context/ThemeContext";

const Homes = styled.div`
position: absolute;
left: 10.9%;
right: 0%;
top: 0%;
bottom: 0%;
font-family:Roboto;
box-shadow:${props => props.theme=="Dark" ?  " 0px 1px 4px rgba(0, 0, 0, 0.2)" :"0px 1px 4px #dbd9d9"};
color: ${props => props.theme=="Dark" ?  "white" :"#1F2327"}; ;
background-color: ${props => props.theme=="Dark" ? "#1F2327" : "white"};

`
const Home = () => {
  const  {theme} = useContext(ThemeContext);
    return (
      
      <Homes theme={theme}>
        <h1 style={{font:
"Roboto"}}> My Dashbord</h1>
        <div className="tog"><Toggle/></div>        
        <User/>
      </Homes>
  
    );
  }
  
  export default Home;