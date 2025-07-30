import { useState, useEffect } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div>
        <Counter></Counter>
      </div>
      <div>
        <TimerIs></TimerIs>
      </div>
    </div>
  )
}

function Counter(){
  let [count,setCount] = useState(0);

  function increaseCounter(){setCount(count+1);}
  function decreaseCoubter(){setCount(count-1);}
  function setCounter(){setCount(0);}
  return (
    <div>
      <h1>Counter App</h1>
      <div>Counter : {count}</div>
      <div>
        <button onClick={increaseCounter}>Increase counter</button>
        <button onClick={decreaseCoubter}>Decrease counter</button>
        <button onClick={setCounter}>Set counter</button>
      </div>
    </div>
  )
}

function TimerIs(){
  let [timerr,setTimerr] = useState(0);
  useEffect(function(){
    setInterval(function(){
      setTimerr(timerr => timerr+1);
    },10000);
  },[])
  return(
    <div>
      <div>
        <h1>Timer part</h1>
      </div>
      <div>
        {timerr}
      </div>
    </div>
  )
}

export default App
