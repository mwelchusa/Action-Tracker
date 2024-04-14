import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import footballIcon from '../assets/football-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function FootballTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isFootball, setIsFootball] = useState(false);
    const [footballElapsedTime, setFootballElapsedTime] = useState(0);
    const footballTimeRef = useRef(0)
    const footballIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isFootball){
           footballIdRef.current = setInterval( () => {
            setFootballElapsedTime(Date.now() -  footballTimeRef.current)
        } , 1000);
                
            


        }

        return() => {
            clearInterval(footballIdRef.current);
            
        }

    }, [isFootball])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsFootball(true);
        footballTimeRef.current = Date.now() - footballElapsedTime;
        
    }

    function stop(){
        setIsFootball(false);

    }
    function reset(){
        setFootballElapsedTime(0);
        setIsFootball(false);

    }

    function formatTime(){
        let hours = Math.floor(footballElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(footballElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(footballElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsFootball(false);
    
   }

    
    
    
        if (action == 'Football' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={footballIcon}></img>
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

export default FootballTime;


