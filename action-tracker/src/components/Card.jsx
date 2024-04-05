import React, { useState, useEffect, createContext } from 'react';
import weightsIcon from './weights.png'
import TimeTrack from './TimeTrack.jsx'
import RunTime from './RunTime.jsx'

export const SelectedContext = createContext();
export const ActionContext = createContext();

const Tile = ( {} ) => {
  const [isSelected, setIsSelected] = useState(false);
  const [timer, setTimer] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ButtonPopup, setButtonPopup] = useState(false);
  let [actionSelected , setActionSelected] = useState("test");

  useEffect(() => {
    let intervalId;

    if (isSelected) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        setProgress((prevProgress) => prevProgress + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isSelected]);

  const handleTileClick = (e) => {
    setIsSelected(!isSelected);
    setActionSelected(actionSelected = e.target.id);
    console.log(actionSelected);
    /*if (!isSelected) {
      setTimer(0); // Reset timer when tile is selected again
    }*/
  }

 


  

  return (
    <div className="tile-container">
      <div id='workout' className={`tile ${isSelected ? 'selected' : ''}`} onClick={(e)=>handleTileClick(e)}>
        <img id='workout'className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p id='workout' className={`tile-description ${isSelected ? 'selected' : ''}`}>Workout</p>
        
      </div>
      <div id='run' className={`tile ${isSelected ? 'selected' : ''}`} onClick={(e)=>handleTileClick(e)}>
        <img id='run'className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`}>Run</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Work</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Personal</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Study</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Baseball</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Dance</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Football</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Soccer</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Programming</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Sleep</p>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <p className={`tile-description ${isSelected ? 'selected' : ''}`} >Meditation</p>
        
      </div>
      
      <ActionContext.Provider value = {actionSelected}>
        <SelectedContext.Provider value ={isSelected} >
          <TimeTrack></TimeTrack>
          <RunTime></RunTime>
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