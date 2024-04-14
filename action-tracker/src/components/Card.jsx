import React, { useState, useEffect, createContext, useContext } from 'react';
import weightsIcon from '../assets/weight-icon.svg';
import runIcon from '../assets/run-icon.svg';
import workIcon from '../assets/work-icon.svg';
import personIcon from '../assets/person-icon.svg';
import studyIcon from '../assets/study-icon.svg';
import baseballIcon from '../assets/baseball-icon.svg';
import hikingIcon from '../assets/hiking-icon.svg';
import footballIcon from '../assets/football-icon.svg';
import soccerIcon from '../assets/soccer-icon.svg';
import programmingIcon from '../assets/programming-icon.svg';
import meditationIcon from '../assets/meditation-icon.svg';
import restIcon from '../assets/rest-icon.svg';
import WorkoutTime from './WorkoutTime.jsx';
import RunTime from './RunTime.jsx';
import WorkTime from './WorkTime.jsx';
import PersonalTime from './PersonalTime.jsx';
import StudyTime from './StudyTime.jsx';
import BaseballTime from './BaseballTime.jsx';
import HikingTime from './HikingTime.jsx';
import FootballTime from './FootballTime.jsx';
import SoccerTime from './SoccerTime.jsx';
import ProgrammingTime from './ProgrammingTime.jsx';
import RestTime from './RestTime.jsx';
import MeditationTime from './MeditationTime.jsx';



export const SelectedContext = createContext();
export const ActionContext = createContext();

const Tile = ( {} ) => {
  const [isSelected, setIsSelected] = useState(false);
  let [actionSelected , setActionSelected] = useState("");


//handles getting the Action selected by the user and passing it to the next Component
  const handleTileClick = (e) => {
    setIsSelected(!isSelected);
    setActionSelected(actionSelected = e.target.id);
  
  }




  
/* When a tile is clicked it will update its classname based on the ID selected, this will trigger the proper component styling to appear
   Passes isSelected and actionSelected values via createContext to consumer components
*/
  return (
     
    <div className="tile-container">

      <div id='Workout' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Workout'className="icon-style" src={weightsIcon} alt="weights selector"></img>
            <button id='Workout' className='tile-description'>Workout</button>
        
      </div>
      <div id='Run' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Run'className="icon-style" src={runIcon} alt="weights selector"></img>
            <button id='Run' className='tile-description'>Run</button>
        
      </div>
      <div id='Work' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Work' className="icon-style" src={workIcon} alt="weights selector"></img>
            <button id='Work' className='tile-description'>Work</button>
        
      </div>
      <div id='Personal' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Personal' className="icon-style" src={personIcon} alt="weights selector"></img>
            <button id='Personal' className='tile-description' >Personal</button>
        
      </div>
      <div id='Study' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Study' className="icon-style" src={studyIcon} alt="weights selector"></img>
            <button id='Study' className='tile-description' >Study</button>
        
      </div>
      <div id='Baseball' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Baseball' className="icon-style" src={baseballIcon} alt="weights selector"></img>
            <button id='Baseball' className='tile-description' >Baseball</button>
        
      </div>
      <div id='Hiking' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Hiking' className="icon-style" src={hikingIcon} alt="weights selector"></img>
            <button id='Hiking' className='tile-description' >Hiking</button>
        
      </div>
      <div id='Football' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Football' className="icon-style" src={footballIcon} alt="weights selector"></img>
            <button id='Football' className='tile-description' >Football</button>
        
      </div>
      <div id='Soccer' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Soccer' className="icon-style" src={soccerIcon} alt="weights selector"></img>
            <button id='Soccer' className='tile-description' >Soccer</button>
        
      </div>
      <div id='Programming' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Programming' className="icon-style" src={programmingIcon} alt="weights selector"></img>
            <button id='Programming' className='tile-description' >Programming</button>
        
      </div>
      <div id='Rest' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Rest' className="icon-style" src={restIcon} alt="weights selector"></img>
            <button id='Rest' className='tile-description' >Rest</button>
        
      </div>
      <div id='Meditation' className={`tile ${isSelected ? 'selected' : ''}`} onClick={handleTileClick}>
        <img id='Meditation' className="icon-style" src={meditationIcon} alt="weights selector"></img>
            <button id='Meditation' className='tile-description' >Meditation</button>
        
      </div>
      
      
      <ActionContext.Provider value = {actionSelected}>
        <SelectedContext.Provider value ={isSelected} >
          <WorkoutTime></WorkoutTime>
          <RunTime/>
          <WorkTime/>
          <StudyTime/>
          <BaseballTime/>
          <HikingTime/>
          <FootballTime/>
          <SoccerTime/>
          <ProgrammingTime/>
          <RestTime/>
          <MeditationTime/>
          <PersonalTime></PersonalTime>
        </SelectedContext.Provider>
      </ActionContext.Provider>
      
      
      
      
    </div>
  );
};

export default Tile;

