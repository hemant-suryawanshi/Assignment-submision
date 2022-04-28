import React from 'react';
import { useContext } from "react";
import './Toggle.css';
import { ThemeContext } from "../context/ThemeContext";

const Toggle = () => {
    const  {Bagroundcolor} = useContext(ThemeContext);
  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={() =>{
            Bagroundcolor()
        }}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Toggle;