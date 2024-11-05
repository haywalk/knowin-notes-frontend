import { Link } from 'react-router-dom';
import Report from '../Components/Report';
import ReportCard from '../Components/ReportCard';
import './HistoryPage.css';

export function HistoryPage() {
    return(
        <>
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <h1 className='history-title'>History</h1>
            </div>
            <div className="col-md-1 py-2 offset-md-2">
                <Link to="/"><button className="d-grid btn btn-secondary" href="#" role="button">Home</button></Link>
            </div>
        </div>
        <div className='container history'>
            <Link to='/report'><ReportCard date="2024-10-08" time="15:33" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-07" time="15:28" type="Number of notes" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-08" time="8:45" type="Number of notes" accuracy="80%" chronometer="4:55" numNotes={50} numMistakes={10}/></Link>
            <Link to='/report'><ReportCard date="2024-10-06" time="14:13" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-04" time="15:33" type="Number of notes" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-04" time="15:33" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-04" time="15:33" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-08" time="15:33" type="Number of notes" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-08" time="15:33" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-08" time="15:33" type="Number of notes" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
            <Link to='/report'><ReportCard date="2024-10-08" time="15:33" type="Time" accuracy="75%" chronometer="20:00" numNotes={20} numMistakes={5}/></Link>
        </div>
        </>
    )
}