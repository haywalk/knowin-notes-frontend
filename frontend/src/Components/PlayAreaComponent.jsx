import { Link } from 'react-router-dom'
import lines from '../assets/lines.png'
import treble_clef from '../assets/treble_clef.png'
import bass_clef from '../assets/bass_clef.png'
import single_note from '../assets/single_note.png'

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
                            <label className="black-note first  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note second  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note third  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note fourth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note fifth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note sixth  btn btn-secondar form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note seventh  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note eighth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note nineth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="black-note tenth  btn btn-secondary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-md-12">
                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
                            </label>

                            <label className="white-note  btn btn-primary form">
                                <input type="radio" name="options2" id="option1" autoComplete="off" defaultChecked/>
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