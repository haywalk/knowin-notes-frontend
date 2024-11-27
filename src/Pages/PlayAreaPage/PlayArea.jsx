import { useLocation } from 'react-router-dom';
import * as React from "react"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Import for navigation
import { ProgressBar, Keyboard } from "../../Components/component_import.js" // Import components
import {single_note, lines, treble_clef, sharp, bass_clef, single_line} from '../../assets/img/img_import.js' // Import images
import { FaPause, FaStop } from "react-icons/fa"; // Import icons
import './PlayArea.css'; // Import CSS for styling

/* Constants */






// Update every other N frames
const updateEveryNFrames = 3; 

// Available notes for bass clef 
// "note": [label, y coordinate, x coordinate, isRotated, accuracy, hasExtraLine]
const notes_dict_bass = {
    "c3":  ["C3",   92, 50, false, '', false],
    "cs3": ["C#3",  92, 50, false, '', false],
    "d3":  ["D3",  161, 50,  true, '', false],
    "ds3": ["D#3", 161, 50,  true, '', false],
    "e3":  ["E3",  137, 50,  true, '', false],
    "f3":  ["F3",  113, 50,  true, '', false],
    "fs3": ["F#3", 113, 50,  true, '', false],
    "g3":  ["G3",   89, 50,  true, '', false],
    "gs3": ["G#3",  89, 50,  true, '', false],
    "a4":  ["A4",   65, 50,  true, '', false],
    "as4": ["A#4",  65, 50,  true, '', false],
    "b4":  ["B4",   41, 50,  true, '', false],
    "c4":  ["C#4",  17, 50,  true, '',  true]
};

// Available notes for treble clef 
// "note": [label, y coordinate, x coordinate, isRotated, accuracy, hasExtraLine]
const notes_dict_treble = {
    "c4":  ["C4",  217,  110, false, '',  true],
    "cs4": ["C#4", 217,  240, false, '',  true],
    "d4":  ["D4",  188, -320, false, '', false],
    "ds4": ["D#4", 188, -190, false, '', false],
    "e4":  ["E4",  165,  320, false, '', false],
    "f4":  ["F4",  140, -110, false, '', false],
    "fs4": ["F#4", 140,   20, false, '', false],
    "g4":  ["G4",  117,  400, false, '', false],
    "gs4": ["G#4", 117,  530, false, '', false],
    "a5":  ["A5",  92,   100, false, '', false],
    "as5": ["A#5", 92,   230, false, '', false],
    "b5":  ["B5",  161,  610,  true, '', false],
    "c5":  ["C5",  137,  310,  true, '', false]
};

/**
 * The play area page
 * 
 * @author Anthony Arseneau, Sawyer Stanley
 * 
 * @returns {JSX.Element} - The play area page
 */
function PlayArea() {
    /* State of the play area */
    // Location for navigation
    const location = useLocation();
    // Current state of the game
    const gameState = location.state?.gameState;
    // The playing style in session
    const single = gameState.noteType == 'single';
    // Current note string to be diplayed
    const currNotes = gameState.targetNoteTimePairs.slice(gameState.targetNoteTimePairs.length-1-(single ? 0 : 2), gameState.targetNoteTimePairs.length);
    // The clef
    const isTreble = (gameState.clef == "treble");
    // The appropriate note dictionary to work with
    const notes_dict = isTreble ? notes_dict_treble : notes_dict_bass;

    // Update loop reference: 
    // https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b

    function startGame(){
        // gameState = gameState;
        console.log(gameState);
        console.log("Game starting!");
        updateLoop();
    }

    function updateLoop() {
        // Not updating every frame to reduce the number of API calls.
        // Runs at 30fps.        
        setFrameCount(frameCount => frameCount + 1);
        requestAnimationFrame(updateLoop);
    }

    function render(){
        // Send API request
        // let tmp = updateGameState(gameState);
        // // Check if the game is still going
        // if(tmp[0] == 'S' || tmp[0] == 's'){
        //     // Assume a state is returned and update UI
        //     let json = tmp.substring("STATE".length);
        //     gameState = JSON.parse(json);
        //     //Update UI as needed
        // }
        // else{
        //     // Assume a report is returned
        //     let json = tmp.substring("REPORT".length);
        //     // QUIT GAME, pass along the report JSON to next page
        // }
        console.log("rendering...");
    }
    
    const [frameCount, setFrameCount] = useState(2);
    // Called once on initial render and once whenever setFrameCount is called
    useEffect(() => {
        if(frameCount % updateEveryNFrames != 0) return;
        render();
    }, [frameCount]);

    // Prevents startGame being called twice (strange bug...)
    let hasStarted = false; 
    // Called once on initial render
    useEffect(() => {
        if (!hasStarted) {
            startGame();
            hasStarted = true;
        }
    }, []);

    // Display the play area
    return (
        <>
            <div className="container">
                {/* Header with buttons and progress bar */}
                <div className='row'>
                    {/* Pause button */}
                    <div className="col-md-1 my-3">
                        <Link to="#"><button className="d-grid py-3 btn btn-primary" role="button"><FaPause className="pause"/></button></Link>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="col-md-10 my-3">
                        <ProgressBar gameState={gameState}/>
                    </div>

                    {/* Stop button */}
                    <div className="col-md-1 my-3">
                        <Link to="/settings"><button className="d-grid py-3 btn btn-primary2" role="button"><FaStop className="stop"/></button></Link>
                    </div>
                </div>

                {/* Music sheet */}
                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        {/* Music sheet lines */}
                        <img className="play-lines" src={lines} alt="lines" />

                        {/* Treble clef */}
                        {isTreble && <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '45px', left: '-50px', zIndex: 2 }} />}
                        {/* Bass clef */}
                        {!isTreble && <img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '37px', left: '50px', zIndex: 2 }} />}

                        {/*  "note": [label, y coordinate, x coordinate, isRotated, accuracy, hasExtraLine] */}
                        {/* Note displayed */}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            {currNotes.map((noteInfo) =>
                                <div key={noteInfo[0]}>
                                    {/* Extra line if outside music sheet */}
                                    {notes_dict[noteInfo[0]][5] && (
                                        <img 
                                            src={single_line} 
                                            width='100px' 
                                            alt='sharp' 
                                            style={{ 
                                                position: 'absolute', 
                                                top: notes_dict[noteInfo[0]][1] + (notes_dict[noteInfo[0]][3] ? -24 : 70), 
                                                left: notes_dict[noteInfo[0]][2] - 15, 
                                                zIndex: 3 
                                            }} 
                                        />
                                    )}

                                    {/* Sharp symbol */}
                                    {noteInfo[0].length === 3 && (
                                        <img 
                                            src={sharp} 
                                            width='70px' 
                                            alt='sharp' 
                                            className={notes_dict[noteInfo[0]][4]} 
                                            style={{ 
                                                position: 'absolute', 
                                                top: notes_dict[noteInfo[0]][2] + (notes_dict[noteInfo[0]][3] ? -9 : 85), 
                                                left: notes_dict[noteInfo[0]][2] - 60, 
                                                zIndex: 3 
                                            }} 
                                        />
                                    )}

                                    {/* Note */}
                                    <img 
                                        src={single_note} 
                                        alt={`note ${noteInfo[0]}`}
                                        className={notes_dict[noteInfo[0]][4]} 
                                        width='70px' 
                                        style={{ 
                                            position: 'absolute', 
                                            top: notes_dict[noteInfo[0]][1], 
                                            left: notes_dict[noteInfo[0]][2], 
                                            transform: notes_dict[noteInfo[0]][3] ? 'rotate(180deg)' : 'none',
                                            zIndex: 3 
                                        }} 
                                    />

                                    {/* Note label */}
                                    <p 
                                        className='note-name' 
                                        style={{ 
                                            position: 'absolute', 
                                            top: notes_dict[noteInfo[0]][3] ? notes_dict[noteInfo[0]][1] - 10 : notes_dict[noteInfo[0]][1] + 82, 
                                            left: notes_dict[noteInfo[0]][3] ? notes_dict[noteInfo[0]][2] + 37 : notes_dict[noteInfo[0]][2] + 41,
                                            zIndex: 3,
                                            transform: 'translate(-50%, -50%)',
                                            textAlign: 'center',
                                            display: 'inline-block'
                                        }} 
                                    >
                                        {`${notes_dict[noteInfo[0]][0]}`}
                                    </p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* Keyboard displayed on screen */}
                <div className='keyboard'>
                    <p style={{paddingBottom: 10}}>[Hint: use {isTreble ? 'right' : 'left'} hand.]</p>
                    <Keyboard/>
                </div>
            </div>
        </>
    )
}

export default PlayArea;