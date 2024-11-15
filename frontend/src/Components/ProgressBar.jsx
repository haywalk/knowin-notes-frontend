import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

export function ProgressBar({gameState}) {
    const [progress, setProgress] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function addTime(date, minutes, seconds) {
        date.setMinutes(date.getMinutes() + minutes);
        date.setSeconds(date.getSeconds() + seconds);
        return date;
    }

    const startMinutes = 2;
    const startSeconds = 30;

    const start = new Date();
    const deadline = addTime(start, startMinutes, startSeconds);

    const getTime = () => {
        const time = new Date(deadline - Date.now());
        setProgress(100 - ((time.getMinutes() * 60) + time.getSeconds()) / ((startMinutes * 60) + startSeconds) * 100);
    
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    const getColor = () => {
        if (progress < 90) {
            return "#00aa00";
        }
        else if (progress < 95) {
            return "#FFA500";
        }
        else {
            return "#ff0000";
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
                    <div className="progress-label">{minutes}:{seconds}</div>
                </div>
            </div>
        </div>
    )
}
