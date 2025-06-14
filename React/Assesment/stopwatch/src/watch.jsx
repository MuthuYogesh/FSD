import React, { useEffect, useState } from 'react'
import style from './watch.module.css'

import Button from './button.jsx'
import Timer from './timer.jsx';

export default function Watch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(()=>{
    let interval;
    
    if(isActive && isPaused === false){
      // alert(isActive)
      interval ??= setInterval(()=>{
        setTime(time => time + 1000);
      }, 1000)
    }
    else{
      clearInterval(interval);
    }
    return ()=>clearInterval(interval);
  }, [isActive, isPaused]);

  let handleStart = ()=>{
    setIsActive(true);
    setIsPaused(false);
    setIsDisabled(true);
  }

  let handlePauseResume = ()=>{
    // alert(`going to ${!isPaused}`)
    setIsPaused(!isPaused)
  }

  let handleReset = ()=>{
    setIsActive(false);
    setTime(0);
    setIsDisabled(false);
  }

  return (
    <>
        <div className={style.top}>
          <h1>Stop Watch</h1>
          <Timer time={time}/>
          <div className={style.btns}>
            <Button name="start" handleClick={handleStart} isDisabled={isDisabled}>Start</Button>
            <Button name="stop" handleClick={handlePauseResume} isDisabled={false}>{(isPaused && isDisabled ? "Resume" : "Pause")}</Button>
            <Button name="reset" handleClick={handleReset} isDisabled={false}>Reset</Button>
          </div>
        </div>
    </>
  )
}
