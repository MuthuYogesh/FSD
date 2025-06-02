import React from "react";
import style from './Home.module.css';

export default function Home(props){
    return (
        <>
            <h1 className={style.name}>hi this is {props.name}.</h1>
            <br/>
            <p className={style.content}> This is a test run</p>
        </>
    )
}