import React from 'react'
import './Keyboard.css' // Import CSS for styling

/**
 * The digital keyboard on screen
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The keyboard component
 */
const Keyboard = () => {
    // Display the keyboard
    return (
        <>
            {/* Black keys */}
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

                {/* White keys */}
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

export default Keyboard