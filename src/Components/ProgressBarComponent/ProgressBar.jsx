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

    // Calculate total duration of the game in seconds
    const totalSeconds = gameState.gameDuration * 60;
    const timeElapsedSeconds = (gameState.currentTime - gameState.gameStartTime) / 1000;
    const timeLeft = totalSeconds - timeElapsedSeconds;
    const progress = 100 - (100 * parseFloat(timeLeft) / parseFloat(totalSeconds));
    const minutes = Math.max(Math.floor((timeLeft / 60) % 60), 0);
    const seconds = Math.max(Math.floor(timeLeft % 60), 0);

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
                    {/* Timer value label */}
                    <div className="progress-label">
                        {/* 00:00 formated */}
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar;
