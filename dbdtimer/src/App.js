import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/timer';

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




  const btnClickHandler = () => {
    setIsRunning(!isRunning);
  }



  return (
    <div className="App">
      <Timer currentTime={currentTime} isRunning={isRunning} btnClickHandler={btnClickHandler} />
    </div>
  );
}

export default App;
