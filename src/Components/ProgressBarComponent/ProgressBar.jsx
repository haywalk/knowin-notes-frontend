import React, { useEffect, useState } from 'react';
import './ProgressBar.css'; // Import CSS for styling

/**
 * Progress bar for the play area
 * 
 * @author Anthony Arseneau, Sawyer Stanley
 * 
 * @param {Object} props - Parameters
 * @param {Object} props.gameState - The current state of the game
 * 
 * @returns {JSX.Element} - The progress bar component
 */
function ProgressBar({gameState}) {
    // State of progress bar
    const [progress, setProgress] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [notesLeft, setNotesLeft] = useState(0);

    const isTimed = gameState.gameMode == "timed";
    const isSingle = gameState.noteType == "single";

    useEffect(() => {
        if (isTimed) {
            // Calculate total duration of the game in seconds
            const totalSeconds = parseFloat(gameState.gameDuration) * 60;
            const timeElapsedSeconds = (gameState.currentTime - gameState.gameStartTime) / 1000;
            const timeLeft = totalSeconds - timeElapsedSeconds;
            const progress = Math.min(100 - (100 * parseFloat(timeLeft) / parseFloat(totalSeconds)), 100);
            const minutes = Math.max(Math.floor((timeLeft / 60) % 60), 0);
            const seconds = Math.max(Math.floor(timeLeft % 60), 0);

            setProgress(progress);
            setMinutes(minutes);
            setSeconds(seconds);
        } 
        else {
            // Calculate the number of notes left
            const progress = Math.min(100 - (100 * parseFloat(gameState.notesInGame - gameState.targetNoteTimePairs.length + 1) / parseFloat(gameState.notesInGame)), 100);
            setProgress(progress);
            setNotesLeft(gameState.notesInGame - gameState.targetNoteTimePairs.length + 1);
        }
    });

    // Determine the colour of the progress bar
    const getColour = () => {
        // Green bar at first
        if (progress < 80) return "#04AE37";

        // Yellow bar when close toward the end
        else if (progress < 90) return "#DFE13E";

        // Red bar when really close to the end
        else return "#D13447";
    }

    // Display the progress bar
    return (
        <>
            {/* Progress bar */}
            <div className="progress-bar">
                <div className="progress-bar-fill" 
                    style={{ width: `${progress}%`,
                            backgroundColor: getColour()
                    }}
                >
                    {/* Value label */}
                    <div className="progress-label">
                        
                        {gameState.gameMode == "timed" &&
                        <>
                            {/* Timer label 00:00 formated */}
                            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                        </>}
                        {gameState.gameMode != "timed" &&
                        <>
                            {/* number of notes label */}
                            {notesLeft} {isSingle ? 'note' : 'chord'}{notesLeft > 1 && "s"} left
                        </>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;
