import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/timer';
import Header from './components/header';
import Leaderboard from './components/leaderboard';
import Form from './components/form';

function App() {

  //states for timer
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);

  //states for data collection from form
  const [survivorName, setsurvivorName] = useState('');
  const [killerName, setkillerName] = useState('');
  const [killerUsed, setkillerUsed] = useState('');
  
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
        <Form survivorName={survivorName} setsurvivorName={setsurvivorName} killerName={killerName} setkillerName={setkillerName} killerUsed={killerUsed} setkillerUsed={setkillerUsed} />
        <Timer currentTime={currentTime} isRunning={isRunning} btnClickHandler={btnClickHandler} />
        <Leaderboard currentTime={currentTime} isRunning={isRunning} survivorName={survivorName} killerName={killerName} killerUsed={killerUsed} />
      </body>
    </>
      
    
  );
}

export default App;
