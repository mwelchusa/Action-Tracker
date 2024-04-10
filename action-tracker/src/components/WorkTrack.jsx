import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './RunTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import runIcon from '../assets/run-icon.svg';
import boltIcon from '../assets/bolt-icon.svg';
import Tile from './Card.jsx';

export const exitContext = createContext(null);

function RunTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isRunning, setIsRunning] = useState(false);
    const [runElapsedTime, setRunElapsedTime] = useState(0);
    const runTimeRef = useRef(0)
    const runIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isRunning){
            if (action == 'Run') {
                runIdRef.current = setInterval( () => {
                    setRunElapsedTime(Date.now() -  runTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(runIdRef.current);
            
        }

    }, [isRunning])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsRunning(true);
        runTimeRef.current = Date.now() - runElapsedTime;
        
      
    }

    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setRunElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){
        let hours = Math.floor(runElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(runElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(runElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsRunning(false);
    
   }

    
    
    
        if (action == 'Run' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='run-icon-page' src={runIcon}></img>
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

export default RunTime;


