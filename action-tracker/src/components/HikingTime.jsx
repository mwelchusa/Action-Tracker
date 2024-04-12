import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import hikingIcon from '../assets/hiking-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function HikingTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isHiking, setIsHiking] = useState(false);
    const [hikingElapsedTime, setHikingElapsedTime] = useState(0);
    const hikingTimeRef = useRef(0)
    const hikingIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isHiking){
            if (action == 'Hiking') {
                hikingIdRef.current = setInterval( () => {
                    setHikingElapsedTime(Date.now() -  hikingTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(hikingIdRef.current);
            
        }

    }, [isHiking])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsHiking(true);
        hikingTimeRef.current = Date.now() - hikingElapsedTime;
        
    }

    function stop(){
        setIsHiking(false);

    }
    function reset(){
        setHikingElapsedTime(0);
        setIsHiking(false);

    }

    function formatTime(){
        let hours = Math.floor(hikingElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(hikingElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(hikingElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsHiking(false);
    
   }

    
    
    
        if (action == 'Hiking' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={hikingIcon}></img>
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

export default HikingTime;


