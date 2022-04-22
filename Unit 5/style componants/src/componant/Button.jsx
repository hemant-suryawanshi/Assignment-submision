
import styled from "styled-components"

const Button=styled.button`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    background-color: ${(props)=>{return props.theme ==true? "#143f6b":"#f6f54d"}} ;
    color: ${(props)=>{return props.theme ==true? "#f6f54d":"#143f6b"}} ;
    cursor: pointer;
    margin: 5px;
&:hover{
   color: green;
}
`

export {Button}