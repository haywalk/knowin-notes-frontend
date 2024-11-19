import React, { useState, useEffect, useRef } from 'react'
import DropdownButton from './DropdownButton'
import DropdownContent from './DropdownContent'
import "./Dropdown.css"
import { PiTimerBold } from "react-icons/pi";
import { BsMusicNoteList } from "react-icons/bs";

const Dropdown = ({isTimeBased, buttonText, content}) => {
    const[open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const toggleDropdown = () => {
        setOpen((open) => !open);
    }

    useEffect(() => {
        const handler = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false);
            }
        };
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        }
    }, [dropdownRef])

    return (
    <div className="dropdown" ref={dropdownRef}>
        <DropdownButton toggle={toggleDropdown} open={open}>{isTimeBased ? <PiTimerBold className='timer-icon'/> : <BsMusicNoteList className='notes-icon'/>}{buttonText}</DropdownButton>
        <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  )
}

export default Dropdown