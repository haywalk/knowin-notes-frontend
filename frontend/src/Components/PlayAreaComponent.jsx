import * as React from "react"
import { useEffect, useState } from 'react'
import { createRoutesFromChildren, Link, useNavigate } from 'react-router-dom'
import lines from '../assets/lines.png'
import single_note from '../assets/single_note.png'
import treble_clef from '../assets/treble_clef.png'
import bass_clef from '../assets/bass_clef.png'
import sharp from '../assets/sharp.png'
import GameState from '../GameState'
import { updateGameState } from '../rest.js'
import { ProgressBar } from "./ProgressBar"
import './PlayAreaComponent.css'
import { FaPause, FaStop } from "react-icons/fa";
import axios from 'axios';

const updateEveryNFrames = 4;

const notes_dict_bass = {
    "c3":  [65, false],
    "cs3": [65, false],
    "d3":  [41, true],
    "ds3": [41, true],
    "e3":  [16, true],
    "f3":  [-8, true],
    "fs3": [-8, true],
    "g3":  [-33, true],
    "gs3": [-33, true],
    "a4":  [-57, true],
    "as4": [-57, true],
    "b4":  [-82, true],
    "c4":  [-106, true]
};

const notes_dict_treble = {
    "c4":  [188, false],
    "cs4": [188, false],
    "d4":  [163, false],
    "ds4": [163, false],
    "e4":  [139, false],
    "f4":  [114, false],
    "fs4": [114, false],
    "g4":  [90, false],
    "gs4": [90, false],
    "a5":  [65, false],
    "as5": [65, false],
    "b5":  [41, true],
    "c5":  [16, true]
};

var hasGameState = false;
var isNoteAvailable = false;
var sentZeroTime = false;
var _gameState;
var _report;

export function PlayAreaComponent({gameState}) {
    
    const [gameIsOver, setGameIsOver] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if(!gameIsOver) return;
        setGameIsOver(false);
        navigate(`/report/${_report.id}`, { 
            state: {
                key: _report.id,
                id: _report.id,
                date: _report.date,
                time: _report.time,
                type: _report.type,
                accuracy: _report.accuracy,
                chronometer: _report.chronometer,
                numNotes: _report.numNotes,
                numMistakes: _report.numMistakes
            }
        });
    }, [gameIsOver]);

    if(!hasGameState) {
        _gameState = gameState;
        hasGameState = true;
        sentZeroTime = false;
        setGameIsOver(false);
    }

    // default values
    let currNote = "";
    let isSharp = false;
    let noteTop = 0;
    let sharpTop = 0;
    let isRotated = false;
    let isTreble = true;

    // Game loop
    // API calls are made every few frames. Assume game state is updated!
    place_note();

    // Update loop reference: 
    // https://medium.com/projector-hq/writing-a-run-loop-in-javascript-react-9605f74174b

    function startGame(){
        // _gameState = gameState;
        console.log("Game starting!");
        console.log(_gameState);
        updateLoop();
    }

    function updateLoop() {
        // Not updating every frame to reduce the number of API calls.
        // Runs at 30fps.        
        setFrameCount(frameCount => frameCount + 1);
        requestAnimationFrame(updateLoop);
    }

    function makeAPICall(){
        if(gameIsOver || sentZeroTime) return;
        console.log("making api call...");
        var b64 = btoa(JSON.stringify(_gameState));
        const url = `http://localhost:8080/api/GET_STATE?old=${b64}`;

        sentZeroTime = (_gameState.currentTime - _gameState.gaemStartTime) <= 0;

        axios.get(url)
            .then(response => {
                // Parse out the game state if a gamestate is returned
                // Parse out the report if a report is returned
                let tmp = response.data;
                // Check if the game is still going
                if(tmp[0] == 'S' || tmp[0] == 's'){
                    // Assume a state is returned and update UI
                    let json = tmp.substring("STATE".length);
                    _gameState = JSON.parse(json);
                    _gameState.currentTime = Date.now();

                    // Stress testing the play area
                    // let anote = _gameState.targetNoteTimePairs[_gameState.targetNoteTimePairs.length-1][0];
                    // _gameState.playedNoteTimePairs.push([anote, Date.now(), 'u']);
                }
                else{
                    // Assume a report is returned
                    // QUIT GAME, pass along the report JSON to next page
                    let json = tmp.substring("REPORT".length);
                    _report = JSON.parse(json);

                    console.log(_report);

                    setGameIsOver(true);
                }
            })
            .catch(error => {
                console.log(`Error: ${error}`);
            });
    }

    function place_note(){
        isNoteAvailable = _gameState.targetNoteTimePairs.length != 0;
        if(!isNoteAvailable) return;
        currNote = _gameState.targetNoteTimePairs[_gameState.targetNoteTimePairs.length-1][0];
        isSharp = currNote.length === 3;
        noteTop = 0;
        isRotated = false;
        if (isTreble) {
            isRotated = notes_dict_treble[currNote][1];
            noteTop = notes_dict_treble[currNote][0];
        }
        else {
            isRotated = notes_dict_bass[currNote][1];
            noteTop = notes_dict_bass[currNote][0];
        }
        sharpTop = noteTop + 85;
        if (isRotated) {
            noteTop += 93;
        }
    }
    
    const [frameCount, setFrameCount] = useState(updateEveryNFrames - 1);
    // Called once on initial render and once whenever setFrameCount is called
    useEffect(() => {
        if(frameCount % updateEveryNFrames != 0) return;
        makeAPICall();
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
            <div className="container">
                <div className='row'>
                    <div className="col-md-1 my-3">
                        <Link to="#"><button className="d-grid py-3 btn btn-primary" role="button"><FaPause className="pause"/></button></Link>
                    </div>
                    
                    <div className="col-md-10 my-3">
                        <ProgressBar gameState={_gameState}/>
                    </div>

                    <div className="col-md-1 my-3">
                        <Link to="/settings" onClick={() => {hasGameState = false}}><button className="d-grid py-3 btn btn-primary2" role="button"><FaStop className="stop"/></button></Link>
                    </div>
                </div>

                <div className='row'>
                    <div style={{ position: 'relative' }}>
                        <img src={lines} alt="lines" style={{borderRadius: '40px', left: '0', width: '100%', minWidth: '1280px', position: 'absolute', zIndex: 1 }} />
                        {isTreble && <img src={treble_clef} width='300px' alt="treble clef" style={{ position: 'absolute', top: '15px', left: '-50px', zIndex: 2 }} />}
                        {!isTreble && <img src={bass_clef} width='160px' alt="treble clef" style={{ position: 'absolute', top: '57px', left: '50px', zIndex: 2 }} />}
                        <div style={{ position: 'absolute', top: '30%', left: '40%', zIndex: 3 }}>

                            {isSharp && (<img src={sharp} width='70px' alt='sharp' style={{ position: 'absolute', top: sharpTop, left: '25px', zIndex: 3 }} />)}
                            {isNoteAvailable && (<img src={single_note} width='70px' alt='c3' style={{ position: 'absolute', top: noteTop, left: '95px', zIndex: 3 }} className={`${isRotated ? "rotate" : ""}`}/>)}

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