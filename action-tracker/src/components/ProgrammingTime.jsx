import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import programmingIcon from '../assets/programming-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function ProgrammingTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isProgramming, setIsProgramming] = useState(false);
    const [programmingElapsedTime, setProgrammingElapsedTime] = useState(0);
    const programmingTimeRef = useRef(0)
    const programmingIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isProgramming){
            if (action == 'Programming') {
                programmingIdRef.current = setInterval( () => {
                    setProgrammingElapsedTime(Date.now() -  programmingTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(programmingIdRef.current);
            
        }

    }, [isProgramming])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsProgramming(true);
        programmingTimeRef.current = Date.now() - programmingElapsedTime;
        
    }

    function stop(){
        setIsProgramming(false);

    }
    function reset(){
        setProgrammingElapsedTime(0);
        setIsProgramming(false);

    }

    function formatTime(){
        let hours = Math.floor(programmingElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(programmingElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(programmingElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsProgramming(false);
    
   }

    
    
    
        if (action == 'Programming' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={programmingIcon}></img>
                    <h3 className='activity-description'>Your current activity is: {action}</h3>
                    <div className='timer'>{formatTime()} </div>
                    <div className='display'>
                        <button className='start' onClick={start}>Start</button>
                        <button className='stop'onClick ={stop}>Stop</button>
                        <button className ='reset' onClick={reset}>Reset</button>
                    </div>
                    
                </div>
                
                <button id='exit' className='exit-btn' onClick={handleExit}>X</button>
            

        </div>
        
        
        </>
        )
        }
       
}

export default ProgrammingTime


