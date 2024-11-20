import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getHistory } from '../rest.js';

export function Menu() {
    const navigate = new useNavigate();

    const handleHistoryClick = () => {
        navigate('/history');
    }

    return (
        <>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="container">
                <h1 className="text-center">Knowin' Notes</h1>
                <br/>
                <div className="row">
                    <div className="col-md-6 offset-md-3" style={{paddingLeft: 40}}>
                        <Link to="/settings" state="t"><button className="d-grid py-5 btn btn-primary menu-option" role="button">Start</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3" style={{paddingLeft: 40}}>
                        <button onClick={handleHistoryClick} className="d-grid py-5 my-4 btn btn-primary menu-option" role="button">History</button>
                    </div>
                </div>
            </div>
        </>
    )
}