import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  
  useEffect(() => {
    let timeInterval;
    if (isRunning){
      timeInterval = setInterval(()=>{
        setCurrentTime(prev => prev +1);
      }, 10)
    }
    return () => clearInterval(timeInterval)
  }, [isRunning, currentTime])

  const milliseconds = currentTime % 100
  const seconds = Math.floor((currentTime % 6000) / 100)
  const minutes = Math.floor((currentTime % 360000) / 6000)


  const btnClickHandler = () => {
    setIsRunning(!isRunning);
  }


  return (
    <div className="App">
      <h1>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}.{milliseconds.toString().padStart(2, "0")}</h1>
      <button onClick={btnClickHandler} >Start</button>
    </div>
  );
}

export default App;
