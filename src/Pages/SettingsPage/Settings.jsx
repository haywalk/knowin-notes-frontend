import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import navigation
import GameState from '../../GameState.js'; // Import game state
import { Dropdown, TimeBasedDropdown, NoteBasedDropdown } from '../../Components/component_import.js'; // Import components
import './Settings.css'; // Import CSS for styling

/**
 * The settings page
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The settings page
 */
function Settings() {
    /* State of the settings */
    // Navigation
    const navigate = useNavigate();

    // State of the game
    let gameState = new GameState();

    // Duration of the game
    const[duration, setDuration] = useState(2);
    // Set duration function
    function chooseDuration(dur) {
        setDuration(dur);
    }

    // Number of notes in game
    const[numberNotes, setNumberNotes] = useState(25);
    // Set number of notes in the game
    function chooseNumberNotes(dur) {
        setNumberNotes(dur);
    }

    // Is time based practice boolean
    const[isTimeBased, setIsTimeBased] = useState(true);
    // Set the value of is time based practice boolean
    function chooseIsTimeBased(isTimed) {
        setIsTimeBased(isTimed);
        // When changing game type, go back to default settings
        setDuration(2);
        setNumberNotes(25);
    }

    // Function to read the form data
    const handleForm = (event) => {
        event.preventDefault();

        // Get the data from the input sections
        let form = event.target;
        let formData = new FormData(form);

        gameState.gameMode = formData.get("gameMode"); // Get the game mode
        if (gameState.gameMode === "timed") {
            gameState.gameDuration = formData.get("gameDuration"); // Get duration if time based
        }
        else {
            gameState.notesInGame = formData.get("notesInGame"); // Get number of notes if note-based
        }
        gameState.clef = formData.get("clef"); // Get the clef
        gameState.currentTime = Date.now(); // Get the current date
        gameState.gameStartTime = Date.now(); // Get the current date
        gameState.noteType = formData.get("note-type"); // Get the note type
        gameState.isLabelled = formData.get("labelled"); // Get the label status

        // Navigate and create game state
        navigate('/play_area', { state: { gameState: gameState } });
    }

    // Display the settings page
    return (
        <>
            <br/><br/>
            <div className="container-sm">
                {/* Heading title */}
                <h1 className="text-center">Settings</h1>
                <br/>
                {/* Settings form */}
                <form onSubmit={handleForm}>
                    {/* Game mode */}
                    <div className='row selection'>
                        <div className="col-md-6">
                            {/* Time based practice */}
                            <input type="radio" id="mode-1" name="gameMode" onClick={() => chooseIsTimeBased(true)} value="timed" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-1" htmlFor="mode-1">Time-Based Practice</label>
                        </div>
                        <div className="col-md-6">
                            {/* Note-based practice */}
                            <input type="radio" id="mode-2" name="gameMode" onClick={() => chooseIsTimeBased(false)} value="notes" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-2" htmlFor="mode-2">Note-Based Practice</label>
                        </div>
                    </div>

                    {/* Dropdown selection */}
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
                    
                    {/* Clef selection */}
                    <div className='row selection'>
                        <div className="col-md-6">
                            {/* Treble clef */}
                            <input type="radio" id="clef-1" name="clef" value="treble" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-3" htmlFor="clef-1">Treble Clef</label>
                        </div>
                        <div className="col-md-6">
                            {/* Bass clef */}
                            <input type="radio" id="clef-2" name="clef" value="bass" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-4" htmlFor="clef-2">Bass Clef</label>
                        </div>
                    </div>

                    {/* Note type selection */}
                    <div className='row selection'>
                        <div className="col-md-6">
                            {/* Single notes */}
                            <input type="radio" id="note-type-1" name="note-type" value="single" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-5" htmlFor="note-type-1">Single Notes</label>
                        </div>
                        <div className="col-md-6">
                            {/* Chords */}
                            <input type="radio" id="note-type-2" name="note-type" value="chord" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-6" htmlFor="note-type-2">Chords</label>
                        </div>
                    </div>

                    {/* Note labels */}
                    <div className='row selection'>
                        <div className="col-md-6">
                            {/* Not labelled */}
                            <input type="radio" id="labelled-1" name="labelled" value={false} className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-15" htmlFor="labelled-1">Notes Not Labelled</label>
                        </div>
                        <div className="col-md-6">
                            {/* labelled */}
                            <input type="radio" id="labelled-2" name="labelled" value={true} className="radio"/>
                            <label className="py-3 btn btn-secondary label label-16" htmlFor="labelled-2">Notes Labelled</label>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className="col-md-2 offset-md-3 my-3">
                            {/* Go back home button */}
                            <Link to="/"><button className="d-grid py-3 btn btn-primary2" role="button">Back</button></Link>
                        </div>
                        <div className="col-md-4 my-3">
                            {/* Play button */}
                            <button type="submit" className="d-grid py-3 btn btn-primary" role="button">Play</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Settings;