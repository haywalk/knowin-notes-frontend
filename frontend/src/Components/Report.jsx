import './Report.css'
import { PiTimerBold } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";

function Report(props) {

    const getColor = () => {
        const accuracy_str = props.accuracy.substring(0, props.accuracy.length-1);
        const accuracy_int = parseInt(accuracy_str);
        if (accuracy_int < 50) {
            return "#D13447";
        }
        else if (accuracy_int < 90) {
            return "#EC8E00";
        }
        else {
            return "#04AE37";
        }
    }

    return (
        <>
            <div className="card">
                <p className="date-time">{props.date} at {props.time}</p>
                <div className="icons">
                    {(props.type == "timed" || props.type == "Time") ? <PiTimerBold className='timer-icon'/> : <BsMusicNoteList className='notes-icon'/>}
                </div>
                <div className={(props.type == "timed" || props.type == "Time") ? "timed" : "notes"}>
                    <p className='gameMode'>{props.type} based practice</p>
                </div>
                <p><span className='accuracy' style={{color: getColor()}}>{props.accuracy}</span> accuracy</p>
                <p>{props.numNotes - props.numMistakes} / {props.numNotes} correct notes</p>
                <p>Time: {props.chronometer}</p>
            </div>
        </>
    )
}

export default Report