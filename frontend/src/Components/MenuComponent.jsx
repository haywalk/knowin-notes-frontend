import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GameState from "../gamestate.js"

export function Menu() {
    const [gs, setGs] = useState(new GameState());
    return (
        <>
            <div className="container">
                <br/>
                <h1 className="text-center">Knowin' Notes</h1>
                <br/>
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <Link to="/settings"><button className="d-grid py-5 btn btn-primary" role="button">Timed Based Practice</button></Link>
                    </div>
                    <h1>
                        {JSON.stringify(gs, null, 4)}
                    </h1>
                    <div className="col-md-4">
                        <Link to="/settings"><button className="d-grid py-5 btn btn-primary" role="button">Number of Notes Based Practice</button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Link to="/history"><button className="d-grid py-5 my-4 btn btn-secondary" role="button">History</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}