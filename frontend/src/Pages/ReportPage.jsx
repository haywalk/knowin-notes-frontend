import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import lines from '../assets/lines.png'
import single_note from '../assets/single_note.png'
import treble_clef from '../assets/treble_clef.png'
import historyData from "../db/history-list.json"
import './ReportPage.css'

export function ReportPage() {
    let [reports, setReports] = useState(historyData);
    let params = useParams();
    let id = params.id
    let report = reports[reports.length - id - 1]
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                        <h1 className='history-title'>Report</h1>
                    </div>
                </div>
                <div className='row report-content'>
                    <div className='col-md-12'>
                        <p>{report.date} at {report.time}</p>
                        <p>{report.type} based practice</p>
                        <p>Accuracy: {report.accuracy}</p>
                        <p>Time: {report.chronometer}</p>
                        <p>Total Notes: {report.numNotes}</p>
                        <p>Mistakes: {report.numMistakes}</p>
                        <p>Response Time: {report.responseTime} seconds per note</p>
                        <p>Settings: single notes, treble clef</p>
                        <br/>
                    </div>
                </div>
                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        <img src={lines} alt="lines" style={{ borderRadius: '40px', left: '0', width: '100%', minWidth: '1280px', position: 'absolute', zIndex: 1 }} />
                        <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />
                        {/*<img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />*/}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            <img src={single_note} width='70px' alt="single note" style={{ position: 'absolute', top: '164px', left: '-200px', zIndex: 3 }} />
                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '115px', left: '-130px', zIndex: 3 }} />
                            <img src={single_note} width='70px' alt="single note" style={{ position: 'absolute', top: '66px', left: '-60px', zIndex: 3 }} />
                            <img src={single_note} width='70px' alt="single note" style={{ position: 'absolute', top: '17px', left: '10px', zIndex: 3 }} />
                            <img src={single_note} className="rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '60px', left: '80px', zIndex: 3 }} />
                            <img src={single_note} className="rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '11px', left: '150px', zIndex: 3 }} />


                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '140px', left: '180px', zIndex: 3 }} />
                            <img src={single_note} className="bad" width='70px' alt="single note" style={{ position: 'absolute', top: '91px', left: '250px', zIndex: 3 }} />
                            <img src={single_note} className="ok" width='70px' alt="single note" style={{ position: 'absolute', top: '42px', left: '320px', zIndex: 3 }} />
                            <img src={single_note} className="rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '85px', left: '390px', zIndex: 3 }} />
                            <img src={single_note} className="rotate" width='70px' alt="single note" style={{ position: 'absolute', top: '36px', left: '460px', zIndex: 3 }} />
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
                        <Link to="http://localhost:8080/api/GENERATE_PDF?id="${id.toString()}><button className="d-grid btn btn-secondary"role="button">Print</button></Link>
                    </div>
                    <div className='col-md-1'>
                        <Link to=""><button className="d-grid btn btn-secondary" role="button">Redo</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}