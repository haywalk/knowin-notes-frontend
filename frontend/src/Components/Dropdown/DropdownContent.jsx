import React from 'react'
import "./DropdownContent.css"

const DropdownContent = ({children, open, chooseduration}) => {
  return (
    <div className={`dropdown-content ${(open) ? "content-open" : null}`}>{children}</div>
  )
}

export default DropdownContent