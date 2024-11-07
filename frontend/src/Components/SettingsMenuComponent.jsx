import { Link } from 'react-router-dom'

export function SettingsMenu() {
    return (
        <>
            <div className="container-sm">
                <br/>
                <h1 className="text-center">Settings</h1>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <Link to=""><button className="d-grid py-3 my-2 btn btn-secondary" role="button">20 minutes</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-12 my-3 btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="py-3 btn btn-secondary active form">
                            <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked/> Treble Clef
                        </label>
                        <label className="py-3 btn btn-secondary form">
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Bass Clef
                        </label>
                    </div>
                </div>
                <div className='row'>
                        <div className="col-md-4 my-2">
                            <label className="py-3 btn btn-secondary active form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/> Single Notes
                            </label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label className="py-3 btn btn-secondary form">
                                <input type="radio" name="options2" id="option2" autoComplete="off"/> Chords
                            </label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label className="py-3 btn btn-secondary form">
                                <input type="radio" name="options2" id="option2" autoComplete="off"/> More
                            </label>
                        </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 offset-md-2 my-3">
                        <Link to="/play_area"><button className="d-grid py-3 btn btn-primary" role="button">Play</button></Link>
                    </div>
                    <div className="col-md-2 my-3">
                        <Link to="/"><button className="d-grid py-3 btn btn-secondary" role="button">Back</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}