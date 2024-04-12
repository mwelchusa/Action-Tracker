import React, { useContext, createContext, useState, useEffect, useRef } from 'react';
import './WorkTime.css';
import {SelectedContext , ActionContext} from './Card.jsx';
import workoutIcon from '../assets/weight-icon.svg';
import './Popup.css';

export const exitContext = createContext(null);

function WorkoutTime(){

    const popup = useContext(SelectedContext);
    let action = useContext(ActionContext);
    const [isWorkout, setIsWorkout] = useState(false);
    const [workoutElapsedTime, setWorkoutElapsedTime] = useState(0);
    const workoutTimeRef = useRef(0)
    const workoutIdRef = useRef(null);
    let [exit, setExit] = useState()
    

    useEffect(() => {

        if(isWorkout){
            if (action == 'Workout') {
                workoutIdRef.current = setInterval( () => {
                    setWorkoutElapsedTime(Date.now() -  workoutTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(workoutIdRef.current);
            
        }

    }, [isWorkout])

    

    useEffect(() => setExit(true),
    [popup])



    function start(){
        setIsWorkout(true);
        workoutTimeRef.current = Date.now() - workoutElapsedTime;
        
      
    }

    function stop(){
        setIsWorkout(false);

    }
    function reset(){
        setWorkoutElapsedTime(0);
        setIsWorkout(false);

    }

    function formatTime(){
        let hours = Math.floor(workoutElapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(workoutElapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(workoutElapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }
    
   function handleExit(){
    setExit(false)
    action = ''
    setIsWorkout(false);
    
   }

    
    
    
        if (action == 'Workout' && exit != false) {
            
         return(
        <>
         <div className='popup'>
                <div className='tracker'>
                    <img className='work-icon-page' src={workoutIcon}></img>
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

export default WorkoutTime;


