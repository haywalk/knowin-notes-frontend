import { Link } from 'react-router-dom';
import {ReportsList} from '../../Components/component_import.js';
import './History.css';

export function History() {
    return(
        <>
            <div className='row'>
                <div className="col-md-1 py-2 offset-md-1">
                    <Link to="/"><button className="d-grid btn btn-secondary" role="button">Home</button></Link>
                </div>
                <div className='col-md-4 offset-md-2' style={{paddingLeft: 40}}>
                    <h1 className='history-title'>History</h1>
                </div>
            </div>
            <div className='container history'>
                <ReportsList/>
            </div>
        </>
    )
}

export default History;