import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:10
  });
  let a=inv.books
  let b=inv.notebooks
  let c=inv.pens
  let d=inv.inkpens
 
  const handelboks=(value)=>{
    if(inv.books<=0 && value===-1){
      return
    }
        setInv((prevState) =>{
          return {...inv, books:prevState.books+value}
        })
      }
  const handelnotebook=(value)=>{
    if(inv.notebooks<=0 && value===-1){
      return
    }
    setInv((prevState) =>{
      return {...inv, notebooks:prevState.notebooks+value}
    })
      }
  const handelpens=(value)=>{
    if(inv.pens<=0 && value===-1){
      return
    }
    setInv((prevState) =>{
      return {...inv, pens:prevState.pens+value}
    })
      }
  const handelinkpens=(value)=>{
    if(inv.inkpens<=0 && value===-1){
      return
    }
    setInv((prevState) =>{
      return {...inv, inkpens:prevState.inkpens+value}
    })
      }
 
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton"onClick={()=>handelboks(1)}>+</button>
        <button className="circlularButton"onClick={()=>handelboks(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handelnotebook(1)}>+</button>
        <button className="circlularButton" onClick={()=>handelnotebook(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handelpens(1)}>+</button>
        <button className="circlularButton" onClick={()=>handelpens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handelinkpens(1)}>+</button>
        <button className="circlularButton" onClick={()=>handelinkpens(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
           
      total: {a+b+c+d}
    </div>
  );
};
