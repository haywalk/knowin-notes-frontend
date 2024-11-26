import React, { useEffect, useState } from "react"
import { BsMusicNoteList } from "react-icons/bs" // Import number of notes based icon
import { PiTimerBold } from "react-icons/pi" // Import time based icon
import { Link, useParams } from "react-router-dom" // Import for navigation
import { lines, single_note, treble_clef } from '../../assets/img/img_import.js' // Import components
import { getReport } from "../../rest.js"
import './Report.css' // Import CSS for styling

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
                                {report.type} based practice
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
                            <h3>TOTAL NOTES</h3>
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
                            <h2></h2>
                            <h3>{timePerNoteCalculator()}s/note</h3>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            {/* Extra settings information */}
                            <h2></h2>
                            <h3>single notes, treble clef</h3>
                        </div>
                    </div>
                </div>

                <br/>

                <div className='row'>
                    {/* Display accuracy for each note */}
                    <div style={{ position: 'relative' }}>
                        <img className="lines" src={lines} alt="lines"/>
                        <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />
                        {/*<img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />*/}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            <img src={single_note} className="good" width='70px' alt="single note" style={{ position: 'absolute', top: '159px', left: '-200px', zIndex: 3 }} />
                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '111px', left: '-130px', zIndex: 3 }} />
                            <img src={single_note} className="good" width='70px' alt="single note" style={{ position: 'absolute', top: '63px', left: '-60px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '107px', left: '10px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '59px', left: '80px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '11px', left: '150px', zIndex: 3 }} />


                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '136px', left: '180px', zIndex: 3 }} />
                            <img src={single_note} className="bad" width='70px' alt="single note" style={{ position: 'absolute', top: '88px', left: '250px', zIndex: 3 }} />
                            <img src={single_note} className="ok rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '132px', left: '320px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '84px', left: '390px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '36px', left: '460px', zIndex: 3 }} />
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