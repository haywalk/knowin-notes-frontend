

export default class GameState{
    gameMode = "";
    gameDuration = -1; //minutes
    notesInGame = -1;
    timePerNote = -1;
    clef = "treble"
    noteTypes = ["single"];

    // Time related variables
    gameStartTime = null;
    currentTime = Date.now();

    // Notes and a timestamp of when they were displayed
    targetNoteTimePairs = [];
    // The number of notes required play the single note, the chord, etc.
    targetNumNotes = 1; 
    // Keys pressed/released and the times that they were pressed/released 
    // [[(str)note, (long)time_played, (char){c (correct), i(incorrect), u(undecided)}]]
    playedNoteTimePairs = [];

}