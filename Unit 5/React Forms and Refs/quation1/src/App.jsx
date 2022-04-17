import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './App.css'


function App() {

  const [countermin ,setCountermin]=useState(0)
  const [countersec ,setCountersec]=useState(0)
  const [counterhour ,setCounterhour]=useState(0)
  const[timer, setTimer]=useState(0)

  const counterRefmin= useRef(null)
  const counterRefsec= useRef(null)
  const counterRefhour= useRef(null)

  useEffect(()=>{
    startIntervalmin()
    startIntervalhour()
    startIntervalsec()
  },[])

  const handelChangetimer = (e) => {
    if (e.keyCode === 13) {
      setTimer(e.target.value)
      console.log(e.target.value)
    }
  };

  useEffect(() => {
    const id=setInterval(() => {
      setTimer((prevalue) => {
        if(prevalue<=0){
          clearInterval(id)
        }
        return prevalue-1;
      });
    }, 1000);

    return ()=>{
      console.log("cleanup Function")
    }
  }, [timer]);

  const startIntervalmin=()=>{
    counterRefmin.current=setInterval(()=>{
      if(countermin==60){
        setCountermin(1)
        // return
      }
      setCountermin((p)=>p+1)
    },1000)
  }

 const startIntervalsec=()=>{
    counterRefsec.current=setInterval(()=>{
      if(countersec>=100){
        setCountersec(0)
      
      }
      setCountersec((p)=>p+1)
    },10)
  }

  const startIntervalhour=()=>{
    counterRefhour.current=setInterval(()=>{
      if(counterhour==12){
        setCounterhour(1)
      }
      setCounterhour((p)=>p+1)
    },3600000)
  }

  return (
    <div className="App">
      <h1 color='red'>StopWatch</h1>
      <h3 color='green'>{counterhour}-{countermin}-{countersec}</h3>
      <button onClick={()=>{
        clearInterval(counterRefmin.current)
        clearInterval(counterRefsec.current)
        clearInterval(counterRefhour.current)
      }}>Pause</button>

      <button onClick={()=>{
        startIntervalmin()
        startIntervalsec()
        startIntervalhour()
      }}>Start</button>

      <button onClick={()=>{
        clearInterval(counterRefmin.current)
        clearInterval(counterRefsec.current)
        clearInterval(counterRefhour.current)
        setCountermin(0)
        setCounterhour(0)
        setCountersec(0)
      }}> Clear </button>
<br>
</br>
<br></br>
      <hr></hr>
      <br></br>
      <h1>Timer</h1>
      <input
          onKeyUp={handelChangetimer}
          type="Number"
          placeholder="Timer"
          id="timer"
        ></input>

        <h3>{timer}</h3>
     
    </div>
  )
}

export default App
