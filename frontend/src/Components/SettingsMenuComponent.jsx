import { Link } from 'react-router-dom'
import './SettingsMenuComponent.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

export function SettingsMenu() {

    const location = useLocation();
    const buttonType = location.state?.buttonType;

    const [val, setVal] = useState("20");
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
        let formDataObj = Object.fromEntries(formData.entries());
        let formJSON = JSON.stringify(formDataObj);

        console.log(formJSON);
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
                            {buttonType === "t" ? <p>Time in minutes:</p> : <p>Number of notes:</p>}
                        </div>
                        <div className="col-md-1">
                            <input type="text" name={buttonType === "t" ? "time" : "number of notes"} onClick={click} onChange={change} value={val}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-6 my-3">
                            <input type="radio" id="clef-1" name="clef" value="Treble Clef" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-1" htmlFor="clef-1">Treble Clef</label>
                        </div>
                        <div className="col-md-6 my-3">
                            <input type="radio" id="clef-2" name="clef" value="Bass Clef" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-2" htmlFor="clef-2">Bass Clef</label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-4 my-2">
                            <input type="radio" id="melody-1" name="melody" value="Single Notes" className="radio" defaultChecked/>
                            <label className="py-3 btn btn-secondary label label-3" htmlFor="melody-1">Single Notes</label>
                        </div>
                        <div className="col-md-4 my-2">
                            <input type="radio" id="melody-2" name="melody" value="Melodies" className="radio"/>
                            <label className="py-3 btn btn-secondary label label-4" htmlFor="melody-2">Melodies</label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label className="py-3 btn btn-secondary label label-5" >More</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6 offset-md-2 my-3">
                            <button type="submit" className="d-grid py-3 btn btn-primary" role="button">Play</button>
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