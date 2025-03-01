import { useEffect } from "react";

export default function Leaderboard({currentTime, isRunning, survivorName, killerName, killerUsed}) {
    useEffect(() => {
        if (!isRunning && currentTime > 0){
            let arrOfTimes = JSON.parse(localStorage.getItem('arrOfTimes')) || [];
            arrOfTimes.push({survivorName, killerName, killerUsed, currentTime});
            localStorage.setItem('arrOfTimes',JSON.stringify(arrOfTimes));
        }
    }, [isRunning,])

    return (
        <div>
        <h1>Leaderboard</h1>
        </div>
    );
    }