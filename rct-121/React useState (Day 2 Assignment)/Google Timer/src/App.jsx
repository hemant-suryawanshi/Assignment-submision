
import { useState } from 'react'
import './App.css'
import Stopwatch from './Componant/Stopwatch'
import Timer from './Componant/Timer'


function App() {
  const [togel,setTogel]=useState(true)

  return (
    <div className="App">
      <button onClick={()=>setTogel(!togel)}>{togel?"Go to StopWatch":"Go to Timer"}</button>
      {togel? <Timer/>:<Stopwatch/>}
    </div>
  )
}

export default App
