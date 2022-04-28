import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";
import styled from "styled-components";

const Navbars = styled.div`
  position: absolute;
  left: 0%;
  right: 89%;
  top: 0%;
  bottom: 0%;
  justify-content: center;
  text-align:center;
  text-decoration:"none";
  box-shadow: ${(props) =>
    props.theme == "Dark"
      ? " 0px 1px 4px rgba(0, 0, 0, 0.2)"
      : "0px 1px 4px #000000"};
  background-color: ${(props) =>
    props.theme == "Dark" ? "#16191C" : "#FFFFFF"};
`;

const StyledLink = styled(Link)`
color: ${(props) => (props.theme == "Dark" ? "#f7f7f7" : "#000000")};
text-decoration: "none";
`
const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
    
    <Navbars theme={theme}>
    <img src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg" alt="" 
    style={{margin:"30px" ,width:"100px",borderRadius:"50px",border:"1px solid gray"}}/>    
   </Navbars>
    </div>   
  )
};

export default Navbar;
