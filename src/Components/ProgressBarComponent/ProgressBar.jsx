import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

export function ProgressBar({gameState}) {

    const [timeLeft, setTimeLeft] = useState(() => {
        const totalSeconds = gameState.gameDuration * 60;
        const timeElapsedSeconds = (Date.now() - gameState.gameStartTime) / 1000;
        return totalSeconds - timeElapsedSeconds;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTimeLeft) => Math.max(prevTimeLeft - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const totalSeconds = gameState.gameDuration * 60;
    const progress = 100 - (100 * parseFloat(timeLeft) / parseFloat(totalSeconds));
    const minutes = Math.floor((timeLeft / 60) % 60);
    const seconds = Math.floor(timeLeft % 60);

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

export default ProgressBar;
