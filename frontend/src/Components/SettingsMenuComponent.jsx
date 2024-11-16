import { Link } from 'react-router-dom'
import './SettingsMenuComponent.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import GameState from '../GameState';


export function SettingsMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    let gameState = new GameState();

    /*
    const onClickPlay = () => {
        let gameState = new GameState();
        // Create game state
        navigate('/play_area', { state: { gameState: gameState } });
    }
    */

    const [val, setVal] = useState("2");
    const click = () => {
        setVal("");
    }
    const change = event => {
        setVal(event.target.value);
    }

    const handleForm = (event) => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);

        gameState.gameMode = formData.get("gameMode");
        if (formData.get("gameMode") === "timed") {
            gameState.gameDuration = Number(formData.get("gameDuration"));
        }
        else {
            gameState.notesInGame = formData.get("notesInGame");
        }
        gameState.clef = formData.get("clef");
        gameState.gameStartTime = Date.now();

        // Create game state
        navigate('/play_area', { state: { gameState: gameState } });
    }

    return (
        <>
            <div className="container-sm">
                <br/>
                <h1 className="text-center">Settings</h1>
                <br/>
                <form onSubmit={handleForm}>
                    <div className="row">
                        {/*<div className="col-md-12"><Link to=""><button className="d-grid py-3 my-2 btn btn-secondary" role="button">20 minutes</button></Link><Dropdown buttonText="Dropdown Button" content={<p>Hello World!</p>}/></div>*/}
                        <div className="offset-md-4 col-md-2">
                            {location.state == "n" ? <p>Number of notes:</p> : <p>Time in minutes:</p>}
                        </div>
                        <div className="col-md-1">
                            <input type="hidden" name="gameMode" value={location.state == "n" ? "notes" : "timed"}/>
                            <input type="text" name={location.state == "n" ? "notesInGame" : "gameDuration"} onClick={click} onChange={change} value={val}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-6 my-3">
                            <input type="radio" id="clef-1" name="clef" value="treble" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-1" htmlFor="clef-1">Treble Clef</label>
                        </div>
                        <div className="col-md-6 my-3">
                            <input type="radio" id="clef-2" name="clef" value="bass" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-2" htmlFor="clef-2">Bass Clef</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-4 my-2">
                            <input type="radio" id="melody-1" name="melody" value="single" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-3" htmlFor="melody-1">Single Notes</label>
                        </div>
                        <div className="col-md-4 my-2">
                            <input type="radio" id="melody-2" name="melody" value="melodies" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-4" htmlFor="melody-2">Melodies</label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label className="py-3 btn btn-secondary label label-5" >More</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 offset-md-2 my-3">
                        <button /*onClick={onClickPlay}*/ type="submit" className="d-grid py-3 btn btn-primary" role="button">Play</button>
                        </div>
                        <div className="col-md-2 my-3">
                            <Link to="/"><button className="d-grid py-3 btn btn-secondary" role="button">Back</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}