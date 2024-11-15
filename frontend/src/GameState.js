

export default class GameState{
    gameMode = "timed";
    gameDuration = 2; //minutes
    notesInGame = -1;
    timePerNote = -1;
    clef = "treble"
    noteTypes = ["single"];

    // Time related variables
    gameStartTime = Date.now();
    currentTime = Date.now();

    // Notes and a timestamp of when they were displayed
    targetNoteTimePairs = [["c4", Date.now()]];
    // The number of notes required play the single note, the chord, etc.
    targetNumNotes = 1; 
    // Keys pressed/released and the times that they were pressed/released
    playedNoteTimePairs = [];

}