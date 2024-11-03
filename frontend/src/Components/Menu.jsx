import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'

export function Menu() {
    return (
        <>
            <div className="container">
                <br/>
                <h1 className="text-center">Knowin' Notes</h1>
                <br/>
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <Link to="/settings"><a className="d-grid py-5 btn btn-primary" role="button">Timed Based Practice</a></Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/settings"><a className="d-grid py-5 btn btn-primary" role="button">Number of Notes Based Practice</a></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Link to=""><a className="d-grid py-5 my-4 btn btn-secondary" href="#" role="button">History</a></Link>
                    </div>
                </div>
            </div>

            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}