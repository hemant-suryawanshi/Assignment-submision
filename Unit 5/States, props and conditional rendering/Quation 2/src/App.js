import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(10);
  const handelchane=(value)=>{
    setcounter(counter + value)
  }
  const handeldouble=()=>{
    setcounter(counter*2)
  }
  return (
    <div className="App">
      <h3 id={counter%2===0 ? "evenno":"oddno"}>Counter:{counter}</h3>
      <button onClick={()=>handelchane(1)}> add 1</button>
      <button onClick={()=>handelchane(-1)}> sub 1</button>
      <button onClick={()=>handeldouble()}> double</button>

    </div>
  );
}

export default App;