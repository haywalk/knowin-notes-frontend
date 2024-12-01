import React from 'react';
import PropTypes from 'prop-types';
import './Keyboard.css'; // Import CSS for styling

/**
 * The digital keyboard on screen
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The keyboard component
 */

const Keyboard = ({notePlayed, isTreble}) => {
    // Display the keyboard
    return (
        <>
            {/* Black keys */}
            <div className='row'>
                <div style={{ position: 'relative' }}>
                    <div className="black-notes col-md-12">
                        <label className="black-note first btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "cs4" : "cs2")}
                            } defaultChecked/>
                        </label>

                        <label className="black-note second btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "ds4" : "ds2")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note third btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "fs4" : "fs2")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note fourth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "gs4" : "gs2")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note fifth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "as5" : "as3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note sixth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "cs5" : "cs3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note seventh btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "ds5" : "ds3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note eighth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "fs5" : "fs3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note nineth  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "gs5" : "gs3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note tenth  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "as6" : "as4")}
                            }  defaultChecked/>
                        </label>
                    </div>
                </div>

                {/* White keys */}
                <div className='row'>
                    <div className="col-md-12">
                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "c4" : "c2")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "d4" : "d2")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "e4" : "e2")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "f4" : "f2")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "g4" : "g2")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "a5" : "a3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "b5" : "b3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "c5" : "c3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "d5" : "d3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "e5" : "e3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "f5" : "f3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "g5" : "g3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "a6" : "a4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "b6" : "b4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed(isTreble ? "c6" : "c4")}
                            }  defaultChecked/>
                        </label>
                    </div>
                </div>

                {/* Submit button */}
                <div className='row'>
                    <div className='col-md-4 my-3 offset-md-4'>
                        <button className="py-3 btn btn-primary" role="button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Keyboard.propTypes = {
    notePlayed: PropTypes.func.isRequired,
    isTreble: PropTypes.bool.isRequired
};

export default Keyboard;