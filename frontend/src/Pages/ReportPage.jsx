import React, { useState, useEffect } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import lines from '../assets/lines.png'
import single_note from '../assets/single_note.png'
import treble_clef from '../assets/treble_clef.png'
import './ReportPage.css'
import { getReport } from "../rest"
import { PiTimerBold } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";

export function ReportPage() {
    const params = useParams();
    let id = params.id;

    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState(null);

    const getColor = () => {
        const accuracy_str = report.accuracy.substring(0, report.accuracy.length-1);
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

    useEffect(() => {
        async function fetchData() {
            if(!loading) return;
            const rp = await getReport(id);
            setReport(rp);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) {
        return <><h1>Loading...</h1></>;
    }

    let printLink = `http://localhost:8080/api/GENERATE_PDF?id=${id}`;
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <h1 className='history-title'>Report</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <p>{report.date} at {report.time}</p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            <h2 className="report-icons">{(report.type == "timed" || report.type == "Time") ? <PiTimerBold className='timer-icon'/> : <BsMusicNoteList className='notes-icon'/>}</h2>
                            <h3 className={(report.type == "timed" || report.type == "Time") ? "timed-text" : "notes-text"}>{report.type} based practice</h3>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            <h2 style={{color: getColor()}}>{report.accuracy}</h2>
                            <h3 style={{color: getColor()}}>ACCURACY</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            <h2>{report.chronometer}</h2>
                            <h3>DURATION</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            <h2>{report.numNotes}</h2>
                            <h3>TOTAL NOTES</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            <h2 className="correct">{report.numNotes - report.numMistakes}</h2>
                            <h3 className="correct">CORRECT</h3>
                        </div>
                    </div>
                    <div className='col-md-3 my-3'>
                        <div className="square report-content">
                            <h2 className="incorrect">{report.numMistakes}</h2>
                            <h3 className="incorrect">INCORRECT</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            <h2>{report.responseTime}</h2>
                            <h3>Time per Note</h3>
                        </div>
                    </div>
                    <div className='col-md-6 my-2'>
                        <div className="square report-content">
                            <h2></h2>
                            <h3>single notes, treble clef</h3>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        <img className="lines" src={lines} alt="lines"/>
                        <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />
                        {/*<img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />*/}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            <img src={single_note} className="good" width='70px' alt="single note" style={{ position: 'absolute', top: '159px', left: '-200px', zIndex: 3 }} />
                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '111px', left: '-130px', zIndex: 3 }} />
                            <img src={single_note} className="good" width='70px' alt="single note" style={{ position: 'absolute', top: '63px', left: '-60px', zIndex: 3 }} />
                            <img src={single_note} className="good" width='70px' alt="single note" style={{ position: 'absolute', top: '15px', left: '10px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '59px', left: '80px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '11px', left: '150px', zIndex: 3 }} />


                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '136px', left: '180px', zIndex: 3 }} />
                            <img src={single_note} className="bad" width='70px' alt="single note" style={{ position: 'absolute', top: '88px', left: '250px', zIndex: 3 }} />
                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '40px', left: '320px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '84px', left: '390px', zIndex: 3 }} />
                            <img src={single_note} className="good rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '36px', left: '460px', zIndex: 3 }} />
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-md-1 offset-md-4'>
                        <Link to="/history"><button className="d-grid btn btn-secondary" role="button">Back</button></Link>
                    </div>
                    <div className='col-md-1'>
                        <Link to="/"><button className="d-grid btn btn-secondary"role="button">Home</button></Link>
                    </div>
                    <div className='col-md-1'>
                        <Link to={printLink}><button className="d-grid btn btn-secondary"role="button">Print</button></Link>
                    </div>
                    <div className='col-md-1'>
                        <Link to=""><button className="d-grid btn btn-secondary" role="button">Redo</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}