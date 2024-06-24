import { useEffect, useState } from 'react';

export default function Timer({btnClickHandler, currentTime, isRunning}) {
    const milliseconds = currentTime % 100
    const seconds = Math.floor((currentTime % 6000) / 100)
    const minutes = Math.floor((currentTime % 360000) / 6000)

    return (
        <div className="App">
            <h1>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}.{milliseconds.toString().padStart(2, "0")}</h1>
            <button onClick={btnClickHandler}> {isRunning?"Stop":"Start"}</button>
        </div>
    )
}