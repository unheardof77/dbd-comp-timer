import { useState } from 'react';
import './App.css';

function App() {
  const [ currentTime, setCurrentTime ] = useState(0);
  let timerInterval;
  const startTimer = () =>{
    timerInterval = setInterval(()=>{
      console.log("hello")
      const newTime = currentTime + 10;
      setCurrentTime(newTime)
    },10)
  }

  const btnClickHandler = () => {
    startTimer();
  }


  return (
    <div className="App">
      <h1>{currentTime}</h1>
      <button onClick={btnClickHandler} >Start</button>
    </div>
  );
}

export default App;
