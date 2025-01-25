import React, {useRef, useState, useEffect} from 'react'
import './StopWatch.css'

export const StopWatch = () => {

    const [isRunning, setIsRunning] = useState(false);
    const [elaspedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIDRef.current)
        }

    }, [isRunning])

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime;

    }

    const stop = () => {
        setIsRunning(false)

    }

    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);

    }

    const formatTime = () => {

        let hours = Math.floor(elaspedTime / (1000*60*60));
        let minutes = Math.floor((elaspedTime / (1000*60)) % 60);
        let seconds = Math.floor((elaspedTime / 1000) % 60);
        let milliseconds = Math.floor((elaspedTime / 10) % 100);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}:${milliseconds}`

    }

  return (
            <div className='stopwatch'>
                <div className='display'>
                    {formatTime()}
                </div>
                <div className='controls'>
                    <button className='start-button' onClick={start}>Start</button>
                    <button className='stop-button' onClick={stop}>Stop</button>
                    <button className='reset-button' onClick={reset}>Reset</button>
                </div>



            </div>
  )
}

export default StopWatch