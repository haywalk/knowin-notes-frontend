import React from 'react'
import useState from 'react'

const TimeBasedDropdown = ({chooseDuration}) => {
  return (
    <div className='row'>
        <div className="col-md-3" style={{paddingLeft: 0}}>
            <input type="radio" id="time-1" name="gameDuration" onClick={() => chooseDuration(1)} value={1} className="radio" />
            <label className="py-3 btn btn-secondary label label-7" htmlFor="time-1">1 min</label>
        </div>
        <div className="col-md-3">
            <input type="radio" id="time-2" name="gameDuration" onClick={() => chooseDuration(2)} value={2} className="radio" defaultChecked/>
            <label className="py-3 btn btn-secondary label label-8" htmlFor="time-2">2 min</label>
        </div>
        <div className="col-md-3">
            <input type="radio" id="time-3" name="gameDuration" onClick={() => chooseDuration(5)} value={5} className="radio" />
            <label className="py-3 btn btn-secondary label label-9" htmlFor="time-3">5 min</label>
        </div>
        <div className="col-md-3" style={{paddingRight: 0}}>
            <input type="radio" id="time-4" name="gameDuration" onClick={() => chooseDuration(10)} value={10} className="radio"/>
            <label className="py-3 btn btn-secondary label label-10" htmlFor="time-4">10 min</label>
        </div>
    </div>
  )
}

export default TimeBasedDropdown