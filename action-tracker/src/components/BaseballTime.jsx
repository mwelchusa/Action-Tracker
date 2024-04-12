import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import baseballIcon from '../assets/baseball-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function BaseballTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isBaseball, setIsBaseball] = useState(false);
    const [baseballElapsedTime, setBaseballElapsedTime] = useState(0);
    const baseballTimeRef = useRef(0)
    const baseballIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isBaseball){
            if (action == 'Baseball') {
                baseballIdRef.current = setInterval( () => {
                    setBaseballElapsedTime(Date.now() -  baseballTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(baseballIdRef.current);
            
        }

    }, [isBaseball])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsBaseball(true);
        baseballTimeRef.current = Date.now() - baseballElapsedTime;
        
    }

    function stop(){
        setIsBaseball(false);

    }
    function reset(){
        setBaseballElapsedTime(0);
        setIsBaseball(false);

    }

    function formatTime(){
        let hours = Math.floor(baseballElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(baseballElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(baseballElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsBaseball(false);
    
   }

    
    
    
        if (action == 'Baseball' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={baseballIcon}></img>
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

export default BaseballTime;


