import './Report.css'
import { PiTimerBold } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";

function Report(props) {

    const getColor = () => {
        const accuracy_str = props.accuracy.substring(0, props.accuracy.length-1);
        const accuracy_int = parseInt(accuracy_str);
        if (accuracy_int < 50) {
            return "#ff899d";
        }
        else if (accuracy_int < 90) {
            return "#f0f24f";
        }
        else {
            return "#35ef78";
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
                <p><span className='accuracy' style={{backgroundColor: getColor()}}>{props.accuracy}</span> accuracy</p>
                <p>{props.numNotes - props.numMistakes} / {props.numNotes} correct notes</p>
                <p>Time: {props.chronometer}</p>
            </div>
        </>
    )
}

export default Report