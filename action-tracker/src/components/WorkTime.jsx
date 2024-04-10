import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import workIcon from '../assets/work-icon.svg';
import Tile from './Card.jsx';

export const exitContext = createContext(null);

function WorkTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isWorking, setIsWorking] = useState(false);
    const [workElapsedTime, setWorkElapsedTime] = useState(0);
    const workTimeRef = useRef(0)
    const workIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isWorking){
            if (action == 'Work') {
                workIdRef.current = setInterval( () => {
                    setWorkElapsedTime(Date.now() -  workTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(workIdRef.current);
            
        }

    }, [isWorking])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsWorking(true);
        workTimeRef.current = Date.now() - workElapsedTime;
        
      
    }

    function stop(){
        setIsWorking(false);

    }
    function reset(){
        setWorkElapsedTime(0);
        setIsWorking(false);

    }

    function formatTime(){
        let hours = Math.floor(workElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(workElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(workElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsWorking(false);
    
   }

    
    
    
        if (action == 'Work' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={workIcon}></img>
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

export default WorkTime;


