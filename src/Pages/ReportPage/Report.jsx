import React, { useEffect, useState } from "react";
import { BsMusicNoteList } from "react-icons/bs"; // Import number of notes based icon
import { PiTimerBold } from "react-icons/pi"; // Import time based icon
import { Link, useParams } from "react-router-dom"; // Import for navigation
import { bass_clef, lines, sharp, single_line, single_note, treble_clef } from '../../assets/img/img_import.js'; // Import components
import { getReport } from "../../rest.js";
import './Report.css'; // Import CSS for styling

// Constants

// Available notes for bass clef 
// "note": [label, y coordinate, x coordinate, isRotated, accuracy, hasExtraLine]
const notes_dict_bass = {
    "c3":  ["C3",   92,  140, false, 'unplayed', false],
    "cs3": ["C#3",  92,  270, false, 'unplayed', false],
    "d3":  ["D3",  161, -290,  true, 'unplayed', false],
    "ds3": ["D#3", 161, -160,  true, 'unplayed', false],
    "e3":  ["E3",  137,  350,  true, 'unplayed', false],
    "f3":  ["F3",  113,  -80,  true, 'unplayed', false],
    "fs3": ["F#3", 113,   50,  true, 'unplayed', false],
    "g3":  ["G3",   89,  430,  true, 'unplayed', false],
    "gs3": ["G#3",  89,  560,  true, 'unplayed', false],
    "a4":  ["A4",   65,  130,  true, 'unplayed', false],
    "as4": ["A#4",  65,  260,  true, 'unplayed', false],
    "b4":  ["B4",   41,  640,  true, 'unplayed', false],
    "c4":  ["C#4",  17,  340,  true, 'unplayed',  true]
};

// Available notes for treble clef 
// "note": [label, y coordinate, x coordinate, isRotated, accuracy, hasExtraLine]
const notes_dict_treble = {
    "c4":  ["C4",  217,  110, false, 'unplayed',  true],
    "cs4": ["C#4", 217,  240, false, 'unplayed',  true],
    "d4":  ["D4",  188, -320, false, 'unplayed', false],
    "ds4": ["D#4", 188, -190, false, 'unplayed', false],
    "e4":  ["E4",  165,  320, false, 'unplayed', false],
    "f4":  ["F4",  140, -110, false, 'unplayed', false],
    "fs4": ["F#4", 140,   20, false, 'unplayed', false],
    "g4":  ["G4",  117,  400, false, 'unplayed', false],
    "gs4": ["G#4", 117,  530, false, 'unplayed', false],
    "a5":  ["A5",  92,   100, false, 'unplayed', false],
    "as5": ["A#5", 92,   230, false, 'unplayed', false],
    "b5":  ["B5",  161,  610,  true, 'unplayed', false],
    "c5":  ["C5",  137,  310,  true, 'unplayed', false]
};

/**
 * The report page
 * 
 * @author Anthony Arseneau, Sawyer Stanley
 * 
 * @returns {JSX.Element} - The report page
 * 
 */
function Report() {
    /* State of the report */
    const params = useParams();
    let id = params.id;
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState(null);

    // Determine colour of the accuracy
    const getColour = () => {
        // Get substring to extract "XX" from "XX%"
        const accuracy_str = report.accuracy.substring(0, report.accuracy.length-1);

        // Parse string to integer
        const accuracy_int = parseInt(accuracy_str);

        // Red accuracy below 50%
        if (accuracy_int < 50) return "#D13447";

        // Yellow accuracy below 90%
        else if (accuracy_int < 90) return "#EC8E00";

        // Green accuracy above or equal to 90%
        else return "#04AE37";
    }

    // Calculate the time spent per note
    const timePerNoteCalculator = () => {
        // Get the time and seperate minutes from seconds
        const time = report.chronometer.split(":");
        // Get minutes
        const minutes = parseInt(time[0]);
        // Get seconds
        const seconds = parseInt(time[1]);
        // Calculate total seconds
        const totalSeconds = minutes * 60 + seconds
        // Calculate seconds spent per note
        return totalSeconds / report.numNotes;
    }

    // Function to set the accuracy for notes
    const setNoteAccuracy = (note) => {
        // Get the accuracy of the note from the report
        const currNoteAccuracy = report.noteAccuracy[note]
        // Check if it was ever played in the session
        if (currNoteAccuracy[1] == 0) notes_dict[note][4] = 'unplayed';
        else {
            // Calculate the accuracy in percentage
            let single_note_accuracy = currNoteAccuracy[0] / currNoteAccuracy[1] * 100;
            // Set the appropriate accuracy tag
            if (single_note_accuracy < 50) notes_dict[note][4] = 'bad';
            else if (single_note_accuracy < 90) notes_dict[note][4] = 'ok';
            else notes_dict[note][4] = 'good';
        }
    }

    useEffect(() => {
        // Fetch the data from backend
        async function fetchData() {
            // If loading, don't do anything
            if(!loading) return;
            // wait to get a report
            const rp = await getReport(id);

            setReport(rp); // Set the current report of the page
            setLoading(false); // Set loading to false
        }
        fetchData();
    }, []);

    // Display "Loading.." while loading the rport
    if (loading) {
        return <><h1>Loading...</h1></>;
    }

    // The report printing link to access the API along the ID
    let printLink = `http://localhost:8080/api/GENERATE_PDF?id=${id}`;

    // The clef used in session
    const isTreble = report.clef == 'treble';

    // The appropriate note dictionary to work with
    const notes_dict = isTreble ? notes_dict_treble : notes_dict_bass;

    // The playing style in session
    const single = report.noteType == 'single';

    // Display the report
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        {/* Heading title */}
                        <h1 className='history-title'>Report</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        {/* Date and time */}
                        <p>{report.date} at {report.time}</p>
                    </div>
                </div>

                <div className="row">
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            {/* Practice type icon */}
                            <h2 className="report-icons">
                                {(report.type == "timed" || report.type == "Time") ? 
                                <PiTimerBold className='timer-icon'/> : 
                                <BsMusicNoteList className='notes-icon'/>}
                            </h2>
                            {/* Practice type text */}
                            <h3 className={(report.type == "timed" || report.type == "Time") ? "timed-text" : "notes-text"}>
                                {report.type}-Based Practice
                            </h3>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            {/* Session accuracy */}
                            <h2 style={{color: getColour()}}>{report.accuracy}</h2>
                            <h3 style={{color: getColour()}}>ACCURACY</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            {/* Session duration */}
                            <h2>{report.chronometer}</h2>
                            <h3>DURATION</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            {/* Total notes in session */}
                            <h2>{report.numNotes}</h2>
                            <h3>TOTAL {single ? 'NOTES' : 'CHORDS'}</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            {/* Number of correct notes in session */}
                            <h2 className="correct">{report.numNotes - report.numMistakes}</h2>
                            <h3 className="correct">CORRECT</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            {/* Number of incorrect notes in session */}
                            <h2 className="incorrect">{report.numMistakes}</h2>
                            <h3 className="incorrect">INCORRECT</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            {/* Time spent per note */}
                            <h2>{timePerNoteCalculator()}s/{single ? 'note' : 'chord'}</h2>
                            <h3>Speed</h3>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            {/* Extra settings information */}
                            <h2>{single ? 'Single Notes' : 'Chords'}</h2>
                            <h3>Playing Style</h3>
                        </div>
                    </div>
                </div>

                <br/>

                <div className='row'>
                    {/* Display accuracy for each note */}
                    <div style={{ position: 'relative' }}>
                        {/* Sheet music lines */}
                        <img className="lines" src={lines} alt="lines"/>
                        {/* Treble clef */}
                        {isTreble && <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '45px', left: '-50px', zIndex: 2 }} />}
                        {!isTreble && <img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '87px', left: '50px', zIndex: 2 }} />}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            {Object.entries(notes_dict).map(([note, [label, top, left, isRotated, accuracy, extraLine]]) => 
                                <div key={note}>
                                    {/* Set the accuracy for the current note */}
                                    {setNoteAccuracy(note)}
                                    {/* Extra line if outside music sheet */}
                                    {extraLine && (
                                        <img 
                                            src={single_line} 
                                            width='100px' 
                                            alt='sharp' 
                                            style={{ 
                                                position: 'absolute', 
                                                top: top + (isRotated ? -24 : 70), 
                                                left: left - 15, 
                                                zIndex: 3 
                                            }} 
                                        />
                                    )}

                                    {/* Sharp symbol */}
                                    {note.length === 3 && (
                                        <img 
                                            src={sharp} 
                                            width='70px' 
                                            alt='sharp' 
                                            className={accuracy} 
                                            style={{ 
                                                position: 'absolute', 
                                                top: top + (isRotated ? -9 : 85), 
                                                left: left - 60, 
                                                zIndex: 3 
                                            }} 
                                        />
                                    )}

                                    {/* Note */}
                                    <img 
                                        src={single_note} 
                                        alt={`note ${note}`}
                                        className={accuracy} 
                                        width='70px' 
                                        style={{ 
                                            position: 'absolute', 
                                            top: top, 
                                            left: left, 
                                            transform: isRotated ? 'rotate(180deg)' : 'none',
                                            zIndex: 3 
                                        }} 
                                    />

                                    {/* Note label */}
                                    <p 
                                        className='note-name' 
                                        style={{ 
                                            position: 'absolute', 
                                            top: isRotated ? top - 10 : top + 82, 
                                            left: isRotated ? left + 37 : left + 41,
                                            zIndex: 3,
                                            transform: 'translate(-50%, -50%)',
                                            textAlign: 'center',
                                            display: 'inline-block'
                                        }} 
                                    >
                                        {`${label}`}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
                {/* Navigation and option selection */}
                <div className='navigation-options'>
                    <div className='row'>
                        <div className='col-md-1 offset-md-4'>
                            {/*  Go back to history button */}
                            <Link to="/history"><button className="d-grid btn btn-secondary" role="button">Back</button></Link>
                        </div>
                        <div className='col-md-1'>
                            {/* Go back home button */}
                            <Link to="/"><button className="d-grid btn btn-secondary"role="button">Home</button></Link>
                        </div>
                        <div className='col-md-1'>
                            {/* Print the report button */}
                            <Link to={printLink}><button className="d-grid btn btn-secondary"role="button">Print</button></Link>
                        </div>
                        <div className='col-md-1'>
                            {/* Redo session button */}
                            <Link to=""><button className="d-grid btn btn-secondary" role="button">Redo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report;