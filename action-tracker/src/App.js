//import ActionSelect from'./ActionSelect.jsx'
import Card from './components/Card.jsx';
import './App.css'
import WorkoutTime from './components/WorkoutTime.jsx';
import RunTime from './components/RunTime.jsx'
import WorkTime from './components/WorkTime.jsx'
import StudyTime from './components/BaseballTime.jsx';
import BaseballTime from './components/BaseballTime.jsx';
import HikingTime from './components/HikingTime.jsx';
import FootballTime from './components/FootballTime.jsx';
import SoccerTime from './components/SoccerTime.jsx';
import ProgrammingTime from './components/ProgrammingTime.jsx';
import RestTime from './components/RestTime.jsx';
import MeditationTime from './components/MeditationTime.jsx';

function App() {
  return (
    <>
    <div>
      <WorkoutTime/>
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
      <Card />
      
    </div>
    </>
  );
}

export default App;
