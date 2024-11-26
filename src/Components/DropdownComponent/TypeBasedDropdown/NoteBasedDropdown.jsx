import React from 'react'

/**
 * Number of notes based dropdown content
 * 
 * @author Anthony Arseneau
 * 
 * @param {Object} props - Parameters
 * @param {Function} propschooseNumberNotes - Function to set the number notes selected
 * @returns {JSX.Element} - The dropdown content component for note based practice
 */
const NoteBasedDropdown = ({chooseNumberNotes}) => {
    // Display the content
    return (
        <>
            {/* Selection */}
            <div className='row'>
                {/* First option */}
                <div className="col-md-3" style={{paddingLeft: 0}}>
                    <input type="radio" id="notes-1" name="notesInGame" onClick={() => chooseNumberNotes(15)} value={15} className="radio" />
                    <label className="py-3 btn btn-secondary label label-11" htmlFor="notes-1">15 notes</label>
                </div>

                {/* Second option */}
                <div className="col-md-3">
                    <input type="radio" id="notes-2" name="notesInGame" onClick={() => chooseNumberNotes(25)} value={25} className="radio" defaultChecked/>
                    <label className="py-3 btn btn-secondary label label-12" htmlFor="notes-2">25 notes</label>
                </div>

                {/* Third option */}
                <div className="col-md-3">
                    <input type="radio" id="notes-3" name="notesInGame" onClick={() => chooseNumberNotes(40)} value={40} className="radio" />
                    <label className="py-3 btn btn-secondary label label-13" htmlFor="notes-3">40 notes</label>
                </div>

                {/* Fourth option */}
                <div className="col-md-3" style={{paddingRight: 0}}>
                    <input type="radio" id="notes-4" name="notesInGame" onClick={() => chooseNumberNotes(60)} value={60} className="radio"/>
                    <label className="py-3 btn btn-secondary label label-14" htmlFor="notes-4">60 notes</label>
                </div>
            </div>
        </>
    )
}

export default NoteBasedDropdown;