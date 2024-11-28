// Followed this resource VERY closely.
// https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API


const NOTE_ON = 0b1001;
const NOTE_OFF = 0b1000;
const OTHER = 0;

const soundfiles = [
    "c3", "cs3", "d3", "ds3", "e3", "f3",
    "fs3", "g3", "gs3", "a4", "as4", "b4",
    "c4", "cs4", "d4", "ds4", "e4", "f4",
    "fs4", "g4", "gs4", "a5", "as5", "b5",
    "c5"
];

export default class MIDIKeyboard{

    #isLogging;
    #midi;
    #isEnabled;
    #noteOffset;
    #audios;
    #noteOnCallbacks;

    constructor(){
        this.#isLogging = false;
        this.#midi = null;
        this.#isEnabled = false;
        this.#noteOffset = 37;
        this.#audios = [];
        this.#noteOnCallbacks = [];
    }

    tryConnect(){
        navigator.requestMIDIAccess().then(this.#onMIDISuccess.bind(this), this.#onMIDIFailure.bind(this));
    }

    listInputsAndOutputs() {
        if(this.#midi === null){
            console.log("No MIDI keyboard connected!");
            return;
        }
        console.log(`Number of MIDI inputs: ${this.#midi.inputs.size}`);
        console.log(`Number of MIDI outputs: ${this.#midi.outputs.size}`);
        for (const entry of this.#midi.inputs) {
            const input = entry[1];
            console.log(
                `Input port [type:'${input.type}']` +
                ` id:'${input.id}'` +
                ` manufacturer:'${input.manufacturer}'` +
                ` name:'${input.name}'` +
                ` version:'${input.version}'`,
            );
        }
    
        for (const entry of this.#midi.outputs) {
            const output = entry[1];
            console.log(
                `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`,
            );
        }
    }

    startLogging(){
        this.#isLogging = true;
    }

    stopLogging(){
        this.#isLogging = false;
    }

    addNoteOnCallback(callback){
        this.#noteOnCallbacks.push(callback);
    }

    get isEnabled(){
        return this.#isEnabled;
    }

    get isLogging(){
        return this.#isLogging;
    }

    #onMIDISuccess(midiAccess){
        // make space for audio instances (necessary?)
        for(let i = 0; i < 128; i++){
            this.#audios[i] = null; 
        if (i >= this.#noteOffset && i < this.#noteOffset + soundfiles.length) {
            this.#audios[i] = new Audio("src/assets/audio/" + soundfiles[i - this.#noteOffset]);
        }
        }
        this.#midi = midiAccess;
        this.#isEnabled = true;
        this.#startListeningForMIDIMessages();
        if(this.#isLogging) console.log("MIDI ready!");
    }

    #onMIDIFailure(msg) {
        console.error(`Failed to get MIDI access - ${msg}`);
        this.#isEnabled = false;
    }
      
    #startListeningForMIDIMessages() {
        this.#midi.inputs.forEach((entry) => {
            entry.onmidimessage = this.#onMIDIMessage.bind(this);
        });
    }
    
    #onMIDIMessage(event) {
        // Status, note, velocity
        // 0x90 0x32 0x00
        var status = event.data[0];
        var note = event.data[1];
        var velocity = event.data[2];
    
        var code = status >> 4;
    
        if(code === NOTE_OFF || (code === NOTE_ON && velocity === 0)){
            // stop playing note!
            this.#onNoteOff(note);
        }
        else if(code === NOTE_ON){
            // play note!
            this.#onNoteOn(note);
        }
        else{
            if(this.#isLogging) console.log("OTHER");
        }
    
        if(this.#isLogging){
            let str = "";
            for (const character of event.data) {
                str += `0x${character.toString(16)} `;
            }
            console.log(str);
        }
    }
    
    #onNoteOn(note){
        var noteName = soundfiles[note - this.#noteOffset];
        if(this.#isLogging) console.log("NOTE_ON! (" + noteName + ")");
        this.#audios[note] = new Audio("src/assets/audio/" + noteName + ".wav");
        this.#audios[note].play();
        
        for (const callback of this.#noteOnCallbacks) {
            callback(noteName);
        }
    }
    
    #onNoteOff(note){
        if(this.#isLogging) console.log("NOTE OFF!");
        // Should maybe fade the sound of the note here somehow
        this.#audios[note].pause();
        this.#audios[note].currentTime = 0;
    }
}


  