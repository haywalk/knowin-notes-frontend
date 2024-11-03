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
                        <Link to=""><a className="d-grid py-3 my-2 btn btn-secondary" href="#" role="button">20 minutes</a></Link>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-12 my-3 btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="py-3 btn btn-secondary active form">
                            <input type="radio" name="options" id="option1" autocomplete="off" defaultChecked/> Treble Clef
                        </label>
                        <label class="py-3 btn btn-secondary form">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Bass Clef
                        </label>
                    </div>
                </div>
                <div className='row'>
                        <div className="col-md-4 my-2">
                            <label class="py-3 btn btn-secondary active form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/> Single Notes
                            </label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label class="py-3 btn btn-secondary form">
                                <input type="radio" name="options2" id="option2" autocomplete="off"/> Bass Clef
                            </label>
                        </div>
                        <div className="col-md-4 my-2">
                            <label class="py-3 btn btn-secondary form">
                                <input type="radio" name="options2" id="option2" autocomplete="off"/> More
                            </label>
                        </div>
                </div>
                <div className='row'>
                    <div className="col-md-6 offset-md-2 my-3">
                        <Link to="/play_area"><a className="d-grid py-3 btn btn-primary" role="button">Play</a></Link>
                    </div>
                    <div className="col-md-2 my-3">
                        <Link to="/"><a className="d-grid py-3 btn btn-secondary" role="button">Back</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}