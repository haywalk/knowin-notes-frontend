/**
 * Game state object
 * 
 * @author Sawyer Stanley, Hayden Walker
 */
class GameState{
    gameMode = "";
    gameDuration = -1; //minutes
    notesInGame = -1;
    timePerNote = -1;
    clef = ""
    noteType = "";

    // Time related variables
    gameStartTime = null;
    currentTime = Date.now();

    // Notes and a timestamp of when they were displayed
    targetNoteTimePairs = [];
    // The number of notes required play the single note, the chord, etc.
    targetNumNotes = 1; 
    // Keys pressed/released and the times that they were pressed/released
    playedNoteTimePairs = [];

    noteAccuracy = {}

    isLabelled = null;
}

export default GameState;