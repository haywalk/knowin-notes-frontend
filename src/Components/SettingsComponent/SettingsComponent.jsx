import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GameState from '../../GameState.js';
import { Dropdown, NoteBasedDropdown, TimeBasedDropdown } from '../DropdownComponent/dropdown_import.js';
import './SettingsMenuComponent.css';


export function SettingsMenu() {
    const navigate = useNavigate();
    const location = useLocation();

    let gameState = new GameState();

    const[duration, setDuration] = useState(2);
    function chooseDuration(dur) {
        setDuration(dur);
    }

    const[numberNotes, setNumberNotes] = useState(25);
    function chooseNumberNotes(dur) {
        setNumberNotes(dur);
    }

    const[isTimeBased, setIsTimeBased] = useState(true);
    function chooseIsTimeBased(isTimed) {
        setIsTimeBased(isTimed);
        setDuration(2);
        setNumberNotes(25);
    }


    const handleForm = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);

        gameState.gameMode = formData.get("gameMode");
        if (gameState.gameMode === "timed") {
            gameState.gameDuration = formData.get("gameDuration");
        }
        else {
            gameState.notesInGame = formData.get("notesInGame");
        }
        gameState.clef = formData.get("clef");
        gameState.gameStartTime = Date.now();

        // Create game state
        navigate('/play_area', { state: { gameState: gameState } });
    }

    return (
        <>
            <br/><br/>
            <div className="container-sm">
                <h1 className="text-center">Settings</h1>
                <br/>
                <form onSubmit={handleForm}>
                    <div className='row selection'>
                        <div className="col-md-6">
                            <input type="radio" id="mode-1" name="gameMode" onClick={() => chooseIsTimeBased(true)} value="timed" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-1" htmlFor="mode-1">Time-Based Practice</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio" id="mode-2" name="gameMode" onClick={() => chooseIsTimeBased(false)} value="notes" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-2" htmlFor="mode-2">Note-Based Practice</label>
                        </div>
                    </div>

                    <div className="row selection">
                        <div className="col-md-12">
                            {isTimeBased ?
                            <Dropdown isTimeBased={isTimeBased} buttonText={duration + " min"} content={
                                    <TimeBasedDropdown chooseDuration={chooseDuration}/>
                                }
                            /> 
                            :
                            <Dropdown isTimeBased={isTimeBased} buttonText={numberNotes + " notes"} content={
                                    <NoteBasedDropdown chooseNumberNotes={chooseNumberNotes}/>
                                }
                            />
                            }
                        </div>
                    </div>
                    
                    <div className='row selection'>
                        <div className="col-md-6">
                            <input type="radio" id="clef-1" name="clef" value="treble" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-3" htmlFor="clef-1">Treble Clef</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio" id="clef-2" name="clef" value="bass" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-4" htmlFor="clef-2">Bass Clef</label>
                        </div>
                    </div>

                    <div className='row selection'>
                        <div className="col-md-6">
                            <input type="radio" id="melody-1" name="melody" value="single" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-5" htmlFor="melody-1">Single Notes</label>
                        </div>
                        <div className="col-md-6">
                            <input type="radio" id="melody-2" name="melody" value="melodies" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-6" htmlFor="melody-2">Melodies</label>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className="col-md-2 offset-md-3 my-3">
                            <Link to="/"><button className="d-grid py-3 btn btn-primary2" role="button">Back</button></Link>
                        </div>
                        <div className="col-md-4 my-3">
                            <button /*onClick={onClickPlay}*/ type="submit" className="d-grid py-3 btn btn-primary" role="button">Play</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}