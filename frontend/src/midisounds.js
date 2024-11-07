// Followed this resource VERY closely.
// https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API

let midi = null; // global MIDIAccess object
let NOTE_ON = 0b1001;
let NOTE_OFF = 0b1000;
let OTHER = 0;

let audioContext = new AudioContext();
const audios = [];

const soundfiles = [
    "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav",
    "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav",
    "c4.wav", "cs4.wav", "d4.wav", "ds4.wav", "e4.wav", "f4.wav",
    "fs4.wav", "g4.wav", "gs4.wav", "a4.wav", "as4.wav", "b4.wav"
];

export function initializeMIDI(){
    // Create an oscillator for each possible MIDI key
    for(let i = 0; i < 128; i++){
        audios[i] = null; 
    }
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
}

function onMIDISuccess(midiAccess) {
    console.log("MIDI ready!");
    midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
    listInputsAndOutputs(midi);
    startLoggingMIDIInput(midi);
}

function onMIDIFailure(msg) {
    console.error(`Failed to get MIDI access - ${msg}`);
}

function listInputsAndOutputs(midiAccess) {
    console.log(`Number of MIDI inputs: ${midiAccess.inputs.size}`);
    console.log(`Number of MIDI outputs: ${midiAccess.outputs.size}`);
    for (const entry of midiAccess.inputs) {
        const input = entry[1];
        console.log(
            `Input port [type:'${input.type}']` +
            ` id:'${input.id}'` +
            ` manufacturer:'${input.manufacturer}'` +
            ` name:'${input.name}'` +
            ` version:'${input.version}'`,
        );
    }

    for (const entry of midiAccess.outputs) {
        const output = entry[1];
        console.log(
            `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
        );
    }
}
  
function startLoggingMIDIInput(midiAccess) {
    midiAccess.inputs.forEach((entry) => {
        entry.onmidimessage = onMIDIMessage;
    });
}

function onMIDIMessage(event) {
    // Status, note, velocity
    // 0x90 0x32 0x00
    var status = event.data[0];
    var note = event.data[1];
    var velocity = event.data[2];

    var code = status >> 4;

    if(code === NOTE_OFF || (code === NOTE_ON && velocity === 0)){
        // stop playing note!
        onNoteOff(note);
    }
    else if(code === NOTE_ON){
        // play note!
        onNoteOn(note);
    }
    else{
        console.log("OTHER");
    }

    // Print full message
    let str = "";
    for (const character of event.data) {
        str += `0x${character.toString(16)} `;
    }
    console.log(str);
}

function onNoteOn(note){
    let offset = 49;
    console.log("NOTE_ON! (" + (note - offset) + ")");
    // 60 is the code for middle C (c4)
    audios[note] = new Audio("src/assets/" + soundfiles[note - offset]);
    // const source = audioContext.createMediaElementSource(audios[note]);
    // source.connect(audioContext.destination);
    audios[note].play();
}

function onNoteOff(note){
    console.log("NOTE OFF!");
    // SHould fade the sound of the note here
    audios[note].pause();
    audios[note].currentTime = 0;
}
  