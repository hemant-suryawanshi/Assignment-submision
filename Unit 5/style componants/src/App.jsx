import { useState } from "react";
import "./App.css";
import { Button } from "./componant/Button";
// import Button from '@mui/material/Button'

function App() {
  const [theme, settheme] = useState(true);
  return (
    <div className="App">
      <Button theme={theme}>Click Me</Button>

      <Button
        onClick={() => {
          settheme(!theme);
        }}
        theme={theme}
      >
        {theme ? "dark" : "light"}
      </Button>
    </div>
  );
}

export default App;
