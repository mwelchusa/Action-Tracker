//import ActionSelect from'./ActionSelect.jsx'
import Card from './components/Card.jsx';
import './App.css'
import TimeTrack from './components/TimeTrack.jsx';
import RunTime from './components/RunTime.jsx'
import WorkTime from './components/WorkTime.jsx'

function App() {
  return (
    <>
    <div>
      <TimeTrack/>
      <RunTime/>
      <WorkTime/>
      <Card />
      
    </div>
    </>
  );
}

export default App;
