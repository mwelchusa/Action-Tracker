import React, { useContext, useState, useEffect, useRef } from 'react';
import './Popup.css';
import {SelectedContext , ActionContext} from './Card.jsx';


function RunTime(){

    const popup = useContext(SelectedContext);
    const action = useContext(ActionContext);
    const [isRunning, setIsRunning] = useState(false);
    const [runElapsedTime, setRunElapsedTime] = useState(0);
    const workoutIdRef = useRef(0);
    const startTimeRef = useRef(0);
    const runTimeRef = useRef(0)
    const runIdRef = useRef(null);
    const [active, setActive] = useState('')

    useEffect(() => {

        if(isRunning){
            if (action == 'run') {
                runIdRef.current = setInterval( () => {
                    setRunElapsedTime(Date.now() -  runTimeRef.current)
                } , 1000);
                
            }


        }

        return() => {
            clearInterval(runIdRef.current);
            
        }

    }, [isRunning])

    useEffect(() => {
        if (runTimeRef > 0)
        setActive('active')
    }, [])


    function handleActionTrack(){
        
    }

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

    
    
    
        if (action == 'run') {;
            
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
                <div className={` ${isRunning ? 'active' : ''}`}>Test</div>
                

        </div>)
         
        }
}

export default RunTime;




/*return(props.trigger) ? (
    <div className='popup'>
            <div className='popup-inner'>
                <button className="close-btn"> X</button>
                { props.children }
                <h3 className=''>My Popup</h3>
            </div>

    </div>) : "";
*/