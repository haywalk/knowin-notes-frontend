// Followed this resource VERY closely.
// https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API


const NOTE_ON = 0b1001;
const NOTE_OFF = 0b1000;
const OTHER = 0;

const soundfiles = [
    "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav",
    "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav", "bkgd.wav",
    "c4.wav", "cs4.wav", "d4.wav", "ds4.wav", "e4.wav", "f4.wav",
    "fs4.wav", "g4.wav", "gs4.wav", "a4.wav", "as4.wav", "b4.wav"
];

export default class MIDIKeyboard{

    #isLogging;
    #midi;
    #isEnabled;
    #audios;
    #noteOffset;

    constructor(){
        this.#isLogging = false;
        this.#midi = null;
        this.isEnabled = false;
        this.#audios = [];
        this.#noteOffset = 49;
    }

    tryConnect(){
        navigator.requestMIDIAccess().then(this.#onMIDISuccess, this.#onMIDIFailure);
    }

    #onMIDISuccess(midiAccess){
        // make space for audio instances (necessary?)
        for(let i = 0; i < 128; i++){
            audios[i] = null; 
        }
        this.#midi = midiAccess;
        this.#isEnabled = true;
        listInputsAndOutputs();
        this.#startListeningForMIDIMessages();
        console.log("MIDI ready!");
    }

    #onMIDIFailure(msg) {
        console.error(`Failed to get MIDI access - ${msg}`);
        this.#isEnabled = false;
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
      
    #startListeningForMIDIMessages() {
        midiAccess.inputs.forEach((entry) => {
            entry.onmidimessage = onMIDIMessage;
        });
    }
    
    onMIDIMessage(event) {
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
        if(this.#isLogging) console.log("NOTE_ON! (" + (note - this.#noteOffset) + ")");
        this.#audios[note] = new Audio("src/assets/" + soundfiles[note - this.#noteOffset]);
        this.#audios[note].play();
    }
    
    #onNoteOff(note){
        if(this.#isLogging) console.log("NOTE OFF!");
        // Should maybe fade the sound of the note here somehow
        audios[note].pause();
        audios[note].currentTime = 0;
    }

    startLogging(){
        this.#isLogging = true;
    }

    stopLogging(){
        this.#isLogging = false;
    }

    get isEnabled(){
        return this.#isEnabled;
    }

    get isLogging(){
        return this.#isLogging;
    }
}


  