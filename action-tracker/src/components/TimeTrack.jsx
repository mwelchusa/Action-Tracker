import React, { useContext } from 'react';
import './Popup.css';
import Tile from "./Card.jsx"
import {SelectedContext} from './Card.jsx';


function TimeTrack(){

    const popup = useContext(SelectedContext);

    
    return(SelectedContext ?
            "": <div className='popup'>
            <button className='close-btn'>X</button>
        <h3>My Popup</h3>
        

</div>);

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