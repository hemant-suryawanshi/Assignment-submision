import { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [login,setlogin] = useState("");

const isAuth = async () => {
    const user = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
        }        
        const data = await axios.post('https://reqres.in/api/login', user)

    setlogin(data.data.token)
  
  };

  const alterauth=()=>{
    setlogin("")
  }

  return (
    <AuthContext.Provider value={{ login,isAuth,alterauth}}>
      {children}
    </AuthContext.Provider>
  );
};
