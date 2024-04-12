import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import studyIcon from '../assets/study-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function StudyTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isStudy, setIsStudy] = useState(false);
    const [studyElapsedTime, setStudyElapsedTime] = useState(0);
    const studyTimeRef = useRef(0)
    const studyIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isStudy){
            if (action == 'Study') {
                studyIdRef.current = setInterval( () => {
                    setStudyElapsedTime(Date.now() -  studyTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(studyIdRef.current);
            
        }

    }, [isStudy])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsStudy(true);
        studyTimeRef.current = Date.now() - studyElapsedTime;
        
    }

    function stop(){
        setIsStudy(false);

    }
    function reset(){
        setStudyElapsedTime(0);
        setIsStudy(false);

    }

    function formatTime(){
        let hours = Math.floor(studyElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(studyElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(studyElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsStudy(false);
    
   }

    
    
    
        if (action == 'Study' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={studyIcon}></img>
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

export default StudyTime;


