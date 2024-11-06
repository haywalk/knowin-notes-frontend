

class GameState{
    gameMode = "timed";
    gameDuration = -1;
    notesInGame = -1;
    timePerNote = -1;
    clef = "treble"
    noteTypes = ["single"];

    // Time related variables
    gameStartTime = Date.now();
    currentTime = Date.now();

    // Notes and a timestamp of when they were displayed
    targetNoteTimePairs = [];
    // The number of notes required play the single note, the chord, etc.
    targetNumNotes = 1; 
    // Keys pressed/released and the times that they were pressed/released
    playedNoteTimePairs = [];

}

const gs = new GameState();

const json = JSON.stringify(gs, null, 4);

console.log(json);