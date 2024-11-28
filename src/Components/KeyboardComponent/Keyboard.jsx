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
                                notePlayed("cs3")}
                            } defaultChecked/>
                        </label>

                        <label className="black-note second btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("ds3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note third btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("fs3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note fourth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("gs3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note fifth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("as3")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note sixth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("cs4")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note seventh btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("ds4")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note eighth btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("fs4")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note nineth  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("gs4")}
                            }  defaultChecked/>
                        </label>

                        <label className="black-note tenth  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("as5")}
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
                                notePlayed("c3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("d3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("e3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("f3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("g3")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("a4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("b4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("c4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("d4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("e4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("f4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("g4")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("a5")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("b5")}
                            }  defaultChecked/>
                        </label>

                        <label className="white-note  btn form">
                            <input type="radio" name="options2" id="option1" autoComplete="off" onClick={() => 
                            {
                                notePlayed("c5")}
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