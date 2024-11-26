import React from 'react'
import useState from 'react'

const NoteBasedDropdown = ({chooseNumberNotes}) => {
  return (
    <div className='row'>
        <div className="col-md-3" style={{paddingLeft: 0}}>
            <input type="radio" id="notes-1" name="notesInGame" onClick={() => chooseNumberNotes(15)} value={15} className="radio" />
            <label className="py-3 btn btn-secondary label label-11" htmlFor="notes-1">15 notes</label>
        </div>
        <div className="col-md-3">
            <input type="radio" id="notes-2" name="notesInGame" onClick={() => chooseNumberNotes(25)} value={25} className="radio" defaultChecked/>
            <label className="py-3 btn btn-secondary label label-12" htmlFor="notes-2">25 notes</label>
        </div>
        <div className="col-md-3">
            <input type="radio" id="notes-3" name="notesInGame" onClick={() => chooseNumberNotes(40)} value={40} className="radio" />
            <label className="py-3 btn btn-secondary label label-13" htmlFor="notes-3">40 notes</label>
        </div>
        <div className="col-md-3" style={{paddingRight: 0}}>
            <input type="radio" id="notes-4" name="notesInGame" onClick={() => chooseNumberNotes(60)} value={60} className="radio"/>
            <label className="py-3 btn btn-secondary label label-14" htmlFor="notes-4">60 notes</label>
        </div>
    </div>
  )
}

export default NoteBasedDropdown