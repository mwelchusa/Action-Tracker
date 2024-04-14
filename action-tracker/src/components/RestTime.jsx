import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import restIcon from '../assets/rest-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function RestTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isRest, setIsRest] = useState(false);
    const [restElapsedTime, setRestElapsedTime] = useState(0);
    const restTimeRef = useRef(0)
    const restIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isRest){
                restIdRef.current = setInterval( () => {
                    setRestElapsedTime(Date.now() -  restTimeRef.current)
                } , 1000);
        }

        return() => {
            clearInterval(restIdRef.current);
            
        }

    }, [isRest])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsRest(true);
        restTimeRef.current = Date.now() - restElapsedTime;
        
    }

    function stop(){
        setIsRest(false);

    }
    function reset(){
        setRestElapsedTime(0);
        setIsRest(false);

    }

    function formatTime(){
        let hours = Math.floor(restElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(restElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(restElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsRest(false);
    
   }

    
    
    
        if (action == 'Rest' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={restIcon}></img>
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

export default RestTime


