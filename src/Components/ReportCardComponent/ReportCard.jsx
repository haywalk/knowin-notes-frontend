import { PiTimerBold } from "react-icons/pi"; // Import icon for time based
import { BsMusicNoteList } from "react-icons/bs"; // Import icon for number of notes based
import './ReportCard.css' // Import CSS for styling

/**
 * Report card component in the history page
 * 
 * @author Anthony Arseneau
 * 
 * @param {Object} props - Parameters
 * @param {string} props.accuracy - Accuracy of session "XX%" formated
 * @param {string} props.date - The date of the session
 * @param {string} props.time - The time of the session
 * @param {string} props.type - The type of session ("timed" or "note")
 * @param {string} props.chronometer - The duration of the session
 * @param {number} props.numNotes - The number of mistakes during the session
 * @param {number} props.numMistakes - the number of mistakes during the session
 * 
 * @returns {JSX.Element} - the report card component
 */
function ReportCard(props) {
    // State of report card

    // Determine colour of the accuracy
    const getColour = () => {
        // Get substring to extract "XX" from "XX%"
        const accuracy_str = props.accuracy.substring(0, props.accuracy.length-1);

        // Parse string to integer
        const accuracy_int = parseInt(accuracy_str);

        // Red accuracy below 50%
        if (accuracy_int < 50) return "#D13447";

        // Yellow accuracy below 90%
        else if (accuracy_int < 90) return "#EC8E00";
        
        // Green accuracy above or equal to 90%
        else return "#04AE37";
    }

    // Display the Report Card
    return (
        <>
            {/* The Report Card */}
            <div className="card">
                {/* Date and Time */}
                <p className="date-time">{props.date} at {props.time}</p>

                {/* Type of practice icon */}
                <div className="icons">
                    {(props.type == "timed" || props.type == "Time") ? <PiTimerBold className='timer-icon'/> : <BsMusicNoteList className='notes-icon'/>}
                </div>

                {/* Type of practice */}
                <div className={(props.type == "timed" || props.type == "Time") ? "timed" : "notes"}>
                    <p className='gameMode'>{props.type} based practice</p>
                </div>

                {/* The accuracy of session */}
                <p>
                    <span className='accuracy' style={{color: getColour()}}>
                        {props.accuracy}
                    </span>
                     accuracy
                </p>

                {/* Correct over Total Notes */}
                <p>
                    {props.numNotes - props.numMistakes} / {props.numNotes}
                     correct notes
                </p>

                {/* Duration of practice */}
                <p>
                    Time: {props.chronometer}
                </p>
            </div>
        </>
    )
}

export default ReportCard;