import React from 'react'
import {FaChevronDown, FaChevronUp} from "../../../node_modules/react-icons/fa"
import "./DropdownButton.css"

const DropdownButton = ({children, open, toggle}) => {
  return (
    <div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`}>
        {children}
        <span className="toggle-icon">
            {open ? <FaChevronUp/> : <FaChevronDown/>}
        </span>
    </div>
  )
}

export default DropdownButton