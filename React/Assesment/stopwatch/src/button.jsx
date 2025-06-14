import React from 'react'
import style from './button.module.css'

export default function button({children, name, handleClick, isDisabled}) {
  return (
    <>
        <button 
          className={style[name]}
          onClick={handleClick}
          disabled={isDisabled}>
          {children}
        </button>
    </>
  )
}
