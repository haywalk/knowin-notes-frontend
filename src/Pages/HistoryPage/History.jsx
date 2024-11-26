import { Link } from 'react-router-dom'; // Import for navigation
import {ReportsList} from '../../Components/component_import.js'; // Import ReportsList
import './History.css'; // Import CSS for styling

/**
 * The history page
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The history page
 */
function History() {
    // Display the history
    return(
        <>
            {/* Top row holding home link and heading */}
            <div className='row'>
                {/* Home link button */}
                <div className="col-md-1 py-2 offset-md-1">
                    <Link to="/"><button className="d-grid btn btn-secondary" role="button">Home</button></Link>
                </div>

                {/* History heading */}
                <div className='col-md-4 offset-md-2' style={{paddingLeft: 40}}>
                    <h1 className='history-title'>History</h1>
                </div>
            </div>

            {/* List of Reports */}
            <div className='container history'>
                <ReportsList/>
            </div>
        </>
    )
}

export default History;