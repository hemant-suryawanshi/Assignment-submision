import { createContext, useState } from "react";


export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
    const [theme,seteme] = useState("Dark");

const Bagroundcolor = async () => {   
  seteme(theme == "Dark" ? "Light" : "Dark")
  };
  
  return (
    <ThemeContext.Provider value={{ theme,Bagroundcolor }}>
      {children}
    </ThemeContext.Provider>
  );
};
