import React, { useState, useEffect, createContext, useContext } from 'react';
import weightsIcon from '../assets/weight-icon.svg'
import runIcon from '../assets/run-icon.svg'
import workIcon from '../assets/work-icon.svg'
import personIcon from '../assets/person-icon.svg'
import studyIcon from '../assets/study-icon.svg'
import baseballIcon from '../assets/baseball-icon.svg'
import hikingIcon from '../assets/hiking-icon.svg'
import footballIcon from '../assets/football-icon.svg'
import soccerIcon from '../assets/soccer-icon.svg'
import programmingIcon from '../assets/programming-icon.svg'
import meditationIcon from '../assets/meditation-icon.svg'
import restIcon from '../assets/rest-icon.svg'
import TimeTrack from './TimeTrack.jsx'
import RunTime from './RunTime.jsx'
import {exitContext} from './RunTime.jsx'
import WorkTime from './WorkTime.jsx'


export const SelectedContext = createContext();
export const ActionContext = createContext();

const Tile = ( {} ) => {
  const [isSelected, setIsSelected] = useState(false);
  const [timer, setTimer] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ButtonPopup, setButtonPopup] = useState(false);
  const checkExit = useContext(exitContext);
  let [actionSelected , setActionSelected] = useState("test");
//Can I use effect for SelectedContext to exit popup?


  useEffect( () => {
    setIsSelected(!isSelected)
    setActionSelected(actionSelected = false)
  }, [checkExit])



  const handleTileClick = (e) => {
    setIsSelected(!isSelected);
    setActionSelected(actionSelected = e.target.id);
    /*if (!isSelected) {
      setTimer(0); // Reset timer when tile is selected again
    }*/
  }

 


  

  return (
    <div className="tile-container">
      <div id='Workout' className={`tile ${isSelected ? 'selected' : ''}`} onClick={(e)=>handleTileClick(e)}>
        <img id='Workout'className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <button id='Workout' className='tile-description'>Workout</button>
        
      </div>
      <div id='Run' className={`tile ${isSelected ? 'selected' : ''}`} onClick={(e)=>handleTileClick(e)}>
        <img id='Run'className="weightsIcon" src={runIcon} alt="weights selector"></img>
            <button id='Run' className='tile-description'>Run</button>
        
      </div>
      <div id='Work' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Work' className="weightsIcon" src={workIcon} alt="weights selector"></img>
            <button id='Work' className='tile-description'>Work</button>
        
      </div>
      <div id='Personal' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Personal' className="weightsIcon" src={personIcon} alt="weights selector"></img>
            <button id='Personal' className='tile-description' >Personal</button>
        
      </div>
      <div id='Study' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Study' className="weightsIcon" src={studyIcon} alt="weights selector"></img>
            <button id='Study' className='tile-description' >Study</button>
        
      </div>
      <div id='Baseball' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Baseball' className="weightsIcon" src={baseballIcon} alt="weights selector"></img>
            <button id='Baseball' className='tile-description' >Baseball</button>
        
      </div>
      <div id='Hiking' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Hiking' className="weightsIcon" src={hikingIcon} alt="weights selector"></img>
            <button id='Hiking' className='tile-description' >Hiking</button>
        
      </div>
      <div id='Football' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Football' className="weightsIcon" src={footballIcon} alt="weights selector"></img>
            <button id='Football' className='tile-description' >Football</button>
        
      </div>
      <div id='Soccer' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Soccer' className="weightsIcon" src={soccerIcon} alt="weights selector"></img>
            <button id='Soccer' className='tile-description' >Soccer</button>
        
      </div>
      <div id='Programming' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Programming' className="weightsIcon" src={programmingIcon} alt="weights selector"></img>
            <button id='Programming' className='tile-description' >Programming</button>
        
      </div>
      <div id='Rest' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Rest' className="weightsIcon" src={restIcon} alt="weights selector"></img>
            <button id='Rest' className='tile-description' >Rest</button>
        
      </div>
      <div id='Meditation' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Meditation' className="weightsIcon" src={meditationIcon} alt="weights selector"></img>
            <button id='Meditation' className='tile-description' >Meditation</button>
        
      </div>
      
      <ActionContext.Provider value = {actionSelected}>
        <SelectedContext.Provider value ={isSelected} >
          <TimeTrack></TimeTrack>
          <RunTime></RunTime>
          <WorkTime></WorkTime>
        </SelectedContext.Provider>
      </ActionContext.Provider>
      
      
      
      
    </div>
  );
};

export default Tile;

/* Timer tracking div
<div className="tile-info">
        <div className="timer">Time: {timer} seconds</div>
        {isSelected && (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              Progress: {progress}%
            </div>
          </div>
        )}
      </div>
      */