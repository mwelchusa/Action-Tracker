import React, { useContext, useState, useEffect, useRef } from 'react';
import './Popup.css';
import Tile from "./Card.jsx"
import {SelectedContext , ActionContext} from './Card.jsx';


function TimeTrack(){

    const popup = useContext(SelectedContext);
    const action = useContext(ActionContext);
    const [workout, setWorkout] = useState();
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const workoutIdRef = useRef(null);
    const startTimeRef = useRef(0);
    const runIdRef = useRef(null);

    useEffect(() => {

        if(isRunning){
            if (action == 'workout') {
                workoutIdRef.current = setInterval( () => {
                    setElapsedTime(Date.now() - startTimeRef.current)
                } , 1000);
                
            }

            if (action == 'run') {
                runIdRef.current = setInterval( () => {
                    setElapsedTime(Date.now() - startTimeRef.current)
                } , 1000);
        }
        }

        return() => {
            clearInterval(workoutIdRef.current);
            
        }

    }, [isRunning])


    function handleActionTrack(){
        
    }

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
      
    }

    function stop(){
        setIsRunning(false);

    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);

    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        //let milliseconds = Math.floor(elapsedTime % 1000)

        return `${hours}:${minutes}:${seconds}`;
    }

    
    
    
        if (popup == true) {;
            
         return(
         <div className='popup' onChange={handleActionTrack}>
                <div className='tracker'>
                    <h3>You chose {action}</h3>
                    <div className='timer'>{formatTime()} </div>
                    <div className='display'>
                        <button className='start' onClick={start}>Start</button>
                        <button className='stop'onClick ={stop}>Stop</button>
                        <button className ='reset' onClick={reset}>Reset</button>
                    </div>
                </div>
                

        </div>)
         
        }
}

export default TimeTrack;




/*return(props.trigger) ? (
    <div className='popup'>
            <div className='popup-inner'>
                <button className="close-btn"> X</button>
                { props.children }
                <h3 className=''>My Popup</h3>
            </div>

    </div>) : "";
*/