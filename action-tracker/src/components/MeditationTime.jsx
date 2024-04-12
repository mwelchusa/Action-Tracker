import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import meditationIcon from '../assets/meditation-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function MeditationTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isMeditation, setIsMeditation] = useState(false);
    const [meditationElapsedTime, setMeditationElapsedTime] = useState(0);
    const meditationTimeRef = useRef(0)
    const meditationIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isMeditation){
            if (action == 'Meditation') {
                meditationIdRef.current = setInterval( () => {
                    setMeditationElapsedTime(Date.now() -  meditationTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(meditationIdRef.current);
            
        }

    }, [isMeditation])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsMeditation(true);
        meditationTimeRef.current = Date.now() - meditationElapsedTime;
        
    }

    function stop(){
        setIsMeditation(false);

    }
    function reset(){
        setMeditationElapsedTime(0);
        setIsMeditation(false);

    }

    function formatTime(){
        let hours = Math.floor(meditationElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(meditationElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(meditationElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsMeditation(false);
    
   }

    
    
    
        if (action == 'Meditation' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={meditationIcon}></img>
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

export default MeditationTime


