import React, { useEffect, useState } from 'react';
import './ProgressBar.css';
import GameState from '../GameState';

export function ProgressBar({gameState}) {
    const _gameState = gameState;
    const totalSeconds = gameState.gameDuration * 60;
    const timeElapsedSeconds = (gameState.currentTime - gameState.gameStartTime) / 1000;
    const timeLeft = totalSeconds - timeElapsedSeconds;
    const progress = 100 - (100 * parseFloat(timeLeft) / parseFloat(totalSeconds));

    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);

    // const [timeLeft, setTimeLeft] = useState(() => {
    //     console.log(`current time ${gameState.currentTime}`);
    //     console.log(`start time ${gameState.gameStartTime}`);
    //     const totalSeconds = gameState.gameDuration * 60;
    //     const timeElapsedSeconds = (gameState.currentTime - gameState.gameStartTime) / 1000;
    //     return totalSeconds - timeElapsedSeconds;
    // });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0));
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);

    const getColor = () => {
        if (progress < 80) {
            return "#04AE37";
        }
        else if (progress < 90) {
            return "#DFE13E";
        }
        else {
            return "#D13447";
        }
    }

    return (
        <div className="container">
            <div className="timer"></div>
            <div className="progress-bar">
                <div className="progress-bar-fill" 
                    style={{ width: `${progress}%`,
                            backgroundColor: getColor()
                    }}
                >
                    <div className="progress-label">{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
                </div>
            </div>
        </div>
    )
}
