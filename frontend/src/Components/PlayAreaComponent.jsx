import { Link } from 'react-router-dom'
import lines from '../assets/lines.png'
import treble_clef from '../assets/treble_clef.png'
import bass_clef from '../assets/bass_clef.png'
import single_note from '../assets/single_note.png'


// UPdate loop reference: 
// https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b
let frameCount = 0;

function updateLoop(frameTime) {
    frameCount++;
    // Only updating every second frame to reduce the number of API calls.
    // Runs at 30fps.
    if (frameCount >= 2) {
        // Send API request
        // Determine if response is gamestate or report
        // If gameState:
        //   Store new gamestate (props?)
        //   render(gameState)
        // else:
        //   navigate to report page and stop updating
        console.log("Updating!");
        frameCount = 0;
    }
    requestAnimationFrame(updateLoop);
}
updateLoop();

export function PlayAreaComponent() {
    return (
        <>
            <div className="container-sm">
                <div className='row'>
                    <div className="col-md-1 my-3">
                        <Link to="#"><button className="d-grid py-3 btn pause" role="button">Pause</button></Link>
                    </div>
                    <div className="col-md-10 my-3 progress">
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1:43</div>
                    </div>
                    <div className="col-md-1 my-3">
                        <Link to="/settings"><button className="d-grid py-3 btn stop" role="button">Stop</button></Link>
                    </div>
                </div>

                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        <img src={lines} alt="lines" style={{borderRadius: '40px', left: '0', width: '100%', minWidth: '1280px', position: 'absolute', zIndex: 1 }} />
                        <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />
                        {/*<img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />*/}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>
                            <img src={single_note} width='70px' alt="single note" style={{ position: 'absolute', top: '65px', left: '95px', zIndex: 3 }} />
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        <div className="black-notes col-md-12">
                            <label class="black-note first  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note second  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note third  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note fourth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note fifth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note sixth  btn btn-secondar form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note seventh  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note eighth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note nineth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="black-note tenth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-12">
                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>

                            <label class="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autocomplete="off" defaultChecked/>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 my-3 offset-md-4'>
                            <Link to=""><button className="py-3 btn btn-primary" role="button">Submit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}