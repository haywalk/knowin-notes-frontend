import { Link } from 'react-router-dom'
import lines from '../assets/lines.png'
import single_note from '../assets/single_note.png'
import treble_clef from '../assets/treble_clef.png'
import * as React from "react";
import { ProgressBar } from "./ProgressBar"
import GameState from '../GameState';
import { useState, useEffect } from 'react';
import { updateGameState } from '../rest';

const updateEveryNFrames = 3;
let _gameState = null;

export function PlayAreaComponent({gameState}) {
    // Update loop reference: 
    // https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b

    function startGame(){
        _gameState = gameState;
        console.log(_gameState);
        console.log("Game starting!");
        updateLoop();
    }

    function updateLoop() {
        // Not updating every frame to reduce the number of API calls.
        // Runs at 30fps.        
        setFrameCount(frameCount => frameCount + 1);
        requestAnimationFrame(updateLoop);
    }

    function render(){
        // Send API request
        // let tmp = updateGameState(gameState);
        // // Check if the game is still going
        // if(tmp[0] == 'S' || tmp[0] == 's'){
        //     // Assume a state is returned and update UI
        //     let json = tmp.substring("STATE".length);
        //     _gameState = JSON.parse(json);
        //     // Update UI as needed
        // }
        // else{
        //     // Assume a report is returned
        //     let json = tmp.substring("REPORT".length);
        //     // QUIT GAME, pass along the report JSON to next page
        // }
        console.log("rendering...");
    }
    
    const [frameCount, setFrameCount] = useState(2);
    // Called once on initial render and once whenever setFrameCount is called
    useEffect(() => {
        if(frameCount % updateEveryNFrames != 0) return;
        render();
    }, [frameCount]);

    // Prevents startGame being called twice (strange bug...)
    let hasStarted = false; 
    // Called once on initial render
    useEffect(() => {
        if (!hasStarted) {
            startGame();
            hasStarted = true;
        }
    }, []);

    return (
        <>
            <div className="container-sm">
                <div className='row'>
                    <div className="col-md-1 my-3">
                        <Link to="#"><button className="d-grid py-3 btn pause" role="button">Pause</button></Link>
                    </div>
                    
                    <div className="col-md-10 my-3">
                        <ProgressBar gameState={_gameState}/>
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