// import { useState } from "react";
// import "./App.css";
// import "./componant/Catagiry"

// const hanadd= ()=>{
//   if(counter>=10){
//     return
//   }
//   setcounter(counter + 1);
//   console.log("updating");

// }

// const hansub=() =>{
//   if(counter<=0){
//     return
//   }
//   setcounter(counter - 1);
//   console.log("updating");

// }



// function App() {
//   const [counter, setcounter] = useState(10);
//   const handelchane=(value)=>{
//     setcounter(counter + value)
//   }
//   return (
//     <div className="app">
//       <h3>Counter:{counter}</h3>
//       <button onClick={()=>handelchane(1)}> add 1</button>
//       <button onClick={()=>handelchane(-1)}> sub 1</button>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Inventory } from "./componants/Inventory";

function App() {
  return (
    <div className="App">
      <Inventory />
    </div>
  );
}

export default App;


