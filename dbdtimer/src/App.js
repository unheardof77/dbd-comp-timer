import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/timer';
import Header from './components/header';

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
    <>
      <Header/>
      <body>
        <Timer currentTime={currentTime} isRunning={isRunning} btnClickHandler={btnClickHandler} />
      </body>
    </>
      
    
  );
}

export default App;
