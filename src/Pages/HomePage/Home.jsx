import { Link, useNavigate } from 'react-router-dom'; // Import for navigation
import './Home.css' // Import CSS for styling

/**
 * The home page
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The home page
 */
function Home() {
    // Navigation when using API
    const navigate = new useNavigate();

    // Navigate to history on history button click
    const handleHistoryClick = () => {
        navigate('/history');
    }

    // Display home page
    return (
        <>
            {/* Elements */}
            <div className="home-elements container">
                {/* Title */}
                <h1 className="text-center">Knowin' Notes</h1>
                <br/>

                {/* Buttons */}
                <div className="row">
                    <div className="col-md-6 offset-md-3" style={{paddingLeft: 40}}>
                        {/* Start button */}
                        <Link to="/settings" state="t"><button className="d-grid py-5 btn btn-primary menu-option" role="button">Start</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3" style={{paddingLeft: 40}}>
                        {/* History button */}
                        <button onClick={handleHistoryClick} className="d-grid py-5 my-4 btn btn-primary menu-option" role="button">History</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;