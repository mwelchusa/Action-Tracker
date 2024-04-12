import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import personalIcon from '../assets/person-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function PersonalTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isPersonal, setIsPersonal] = useState(false);
    const [personalElapsedTime, setPersonalElapsedTime] = useState(0);
    const personalTimeRef = useRef(0)
    const personalIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isPersonal){
            if (action == 'Personal') {
                personalIdRef.current = setInterval( () => {
                    setPersonalElapsedTime(Date.now() -  personalTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(personalIdRef.current);
            
        }

    }, [isPersonal])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsPersonal(true);
        personalTimeRef.current = Date.now() - personalElapsedTime;
        
      
    }

    function stop(){
        setIsPersonal(false);

    }
    function reset(){
        setPersonalElapsedTime(0);
        setIsPersonal(false);

    }

    function formatTime(){
        let hours = Math.floor(personalElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(personalElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(personalElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsPersonal(false);
    
   }

    
    
    
        if (action == 'Personal' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={personalIcon}></img>
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

export default PersonalTime;


