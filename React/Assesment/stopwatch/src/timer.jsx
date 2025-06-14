import React from 'react'
import style from './timer.module.css'

export default function Timer({time}) {
  return (
    <>
        {/*HH:MM:SS*/}
        <div className={style.timer}>
            <span className='HH'>
                {("0" + Math.floor((time / (60*60*1000)) % 60)).slice(-2)}: 
            </span>
            <span className='MM'>
                {("0" + Math.floor((time / (60*1000)) % 60)).slice(-2)}:
            </span>
            <span className='SS'>
                {("0" + Math.floor((time / (1000)) % 60)).slice(-2)}
            </span>
        </div>
    </>
  )
}
