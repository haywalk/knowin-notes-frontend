import { useLocation } from 'react-router-dom';
import * as React from "react"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Import for navigation
import { ProgressBar, Keyboard } from "../../Components/component_import.js" // Import components
import {single_note, lines, treble_clef, bass_clef} from '../../assets/img/img_import.js' // Import images
import { FaPause, FaStop } from "react-icons/fa"; // Import icons
import './PlayArea.css'; // Import CSS for styling

/* Constants */

// Update every other N frames
const updateEveryNFrames = 3; 

// Available notes for bass clef ("note": [y coordinate in pixels, isRotated boolean])
const notes_dict_bass = {
    "c3":  [65, false],
    "cs3": [65, false],
    "d3":  [41, true],
    "ds3": [41, true],
    "e3":  [16, true],
    "f3":  [-8, true],
    "fs3": [-8, true],
    "g3":  [-33, true],
    "gs3": [-33, true],
    "a4":  [-57, true],
    "as4": [-57, true],
    "b4":  [-82, true],
    "c4":  [-106, true]
};

// Available notes for treble clef ("note": [y coordinate in pixels, isRotated boolean])
const notes_dict_treble = {
    "c4":  [188, false],
    "cs4": [188, false],
    "d4":  [163, false],
    "ds4": [163, false],
    "e4":  [139, false],
    "f4":  [114, false],
    "fs4": [114, false],
    "g4":  [90, false],
    "gs4": [90, false],
    "a5":  [65, false],
    "as5": [65, false],
    "b5":  [41, true],
    "c5":  [16, true]
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
    // Current note string to be diplayed
    const currNote = gameState.targetNoteTimePairs[gameState.targetNoteTimePairs.length-1][0];
    // Is the note sharp boolean
    const isSharp = currNote.length === 3;
    // Margin top of the note
    let noteTop = 0;
    // Is the note rotated boolean
    let isRotated = false;
    // The clef
    const isTreble = (gameState.clef == "treble");
    // Get the appropriate dictionary for clef
    if (isTreble) {
        isRotated = notes_dict_treble[currNote][1];
        noteTop = notes_dict_treble[currNote][0];
    }
    else {
        isRotated = notes_dict_bass[currNote][1];
        noteTop = notes_dict_bass[currNote][0];
    }
    // Sharp symbol top margin 
    let sharpTop = noteTop + 85;
    // If note is rotated, add to the top margin of sharp
    if (isRotated) {
        noteTop += 93;
    }

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
                        <img src={lines} alt="lines" style={{borderRadius: '40px', left: '0', width: '100%', minWidth: '1280px', position: 'absolute', zIndex: 1 }} />

                        {/* Treble clef */}
                        {isTreble && <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />}
                        
                        {/* Bass clef */}
                        {!isTreble && <img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />}

                        {/* Note displayed */}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            {/* Sharp symbol */}
                            {isSharp && (<img src={sharp} width='70px' alt='sharp' style={{ position: 'absolute', top: sharpTop, left: '25px', zIndex: 3 }} />)}

                            {/* Note */}
                            <img src={single_note} width='70px' alt='c3' style={{ position: 'absolute', top: noteTop, left: '95px', zIndex: 3 }} className={`${isRotated ? "rotate" : ""}`}/>
                        </div>
                    </div>
                </div>

                {/* Keyboard displayed on screen */}
                <div className='keyboard'>
                    <Keyboard/>
                </div>
            </div>
        </>
    )
}

export default PlayArea;