import { useContext } from "react";
import React from "react";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { login, isAuth, alterauth } = useContext(AuthContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        border: "5px solid gray",
        margin: "10px",
      }}
    >
      <button
        onClick={() => {
          {
            login === "" ? isAuth() : alterauth();
          }
        }}
      >
        {login === "" ? "Login" : "Logout"}
      </button>
    </nav>
  );
};

export default Navbar;
