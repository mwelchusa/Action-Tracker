import React, { useState, useEffect, createContext } from 'react';
import weightsIcon from './weights.png'
import TimeTrack from './TimeTrack.jsx'

export const SelectedContext = createContext();

const Tile = ( {} ) => {
  const [isSelected, setIsSelected] = useState(false);
  const [timer, setTimer] = useState(0);
  const [progress, setProgress] = useState(0);
  const [ButtonPopup, setButtonPopup] = useState(false);

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

  const handleTileClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      setTimer(0); // Reset timer when tile is selected again
    }
  }

 


  

  return (
    <div className="tile-container">
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Workout</text>
            <SelectedContext.Provider value ={setIsSelected}>
        <TimeTrack></TimeTrack>
      </SelectedContext.Provider>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Run</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Work</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Personal</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Study</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Baseball</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Dance</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Football</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Soccer</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Programming</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Sleep</text>
        
      </div>
      <div className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img className="weightsIcon" src={weightsIcon} alt="weights selector"></img>
            <text className={`tile-description ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>Meditation</text>
        
      </div>
      if (isSelected == True) {
        <p>Test</p>

      }
      
      
      
      
      
      
      
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