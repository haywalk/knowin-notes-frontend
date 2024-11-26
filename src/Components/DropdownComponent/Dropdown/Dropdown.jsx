import React, { useEffect, useRef, useState } from 'react';
import { BsMusicNoteList } from "react-icons/bs";
import { PiTimerBold } from "react-icons/pi";
import DropdownButton from '../DropdownButton/DropdownButton';
import DropdownContent from '../DropdownContent/DropdownContent';
import "./Dropdown.css";

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