import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import soccerIcon from '../assets/soccer-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function SoccerTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isSoccer, setIsSoccer] = useState(false);
    const [soccerElapsedTime, setSoccerElapsedTime] = useState(0);
    const soccerTimeRef = useRef(0)
    const soccerIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isSoccer){
                soccerIdRef.current = setInterval( () => {
                    setSoccerElapsedTime(Date.now() -  soccerTimeRef.current)
                } , 1000);
        }

        return() => {
            clearInterval(soccerIdRef.current);
            
        }

    }, [isSoccer])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsSoccer(true);
        soccerTimeRef.current = Date.now() - soccerElapsedTime;
        
    }

    function stop(){
        setIsSoccer(false);

    }
    function reset(){
        setSoccerElapsedTime(0);
        setIsSoccer(false);

    }

    function formatTime(){
        let hours = Math.floor(soccerElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(soccerElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(soccerElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsSoccer(false);
    
   }

    
    
    
        if (action == 'Soccer' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={soccerIcon}></img>
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

export default SoccerTime


