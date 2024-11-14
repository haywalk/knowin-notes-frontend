import { Link } from 'react-router-dom';
import Report from '../Components/Report';
import './HistoryPage.css';
import ReportsList from '../Components/ReportsList';

export function HistoryPage() {
    return(
        <>
        <div className='row'>
            <div className='col-md-4 offset-md-4'>
                <h1 className='history-title'>History</h1>
            </div>
            <div className="col-md-1 py-2 offset-md-2">
                <Link to="/"><button className="d-grid btn btn-secondary" role="button">Home</button></Link>
            </div>
        </div>
        <div className='container history'>
            <ReportsList/>
        </div>
        </>
    )
}