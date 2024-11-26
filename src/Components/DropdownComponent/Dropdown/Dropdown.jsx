import React, { useEffect, useRef, useState } from 'react';
import { BsMusicNoteList } from "react-icons/bs"; // Import icon for number of notes based
import { PiTimerBold } from "react-icons/pi"; // Import icon for time-based
import { DropdownButton, DropdownContent } from '../dropdown_import'; // Import dropdown components
import "./Dropdown.css"; // Import CSS for styling

/**
 * Dropdown component for the settings
 * 
 * @author Anthony Arseneau
 * 
 * @param {Object} props - Parameters
 * @param {boolean} props.isTimeBased - The type of dropdown
 * @param {string} props.buttonText - The text displayed within the dropdown button
 * @param {React.ReactNode} props.content - The content diplayed when opened
 * 
 * @returns {JSX.Element} - The dropdown component
 */
const Dropdown = ({isTimeBased, buttonText, content}) => {
    // State of Dropdown
    const[open, setOpen] = useState(false); // Is the dropdown open boolean
    const toggleDropdown = () => {
        setOpen((open) => !open); // Toggle between open and close
    }

    // Reference of Dropdown
    const dropdownRef = useRef();

    // Handle clicks outside dropdown to close it
    useEffect(() => {
        // Handler to detect clicks outside dropdown
        const handler = (event) => {
            // Check if the click is outside the dropdown
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false); // Close it
            }
        };

        // Attach the "click" event to the event listener
        document.addEventListener("click", handler);

        // Cleanup the event listener when done
        return () => {
            document.removeEventListener("click", handler);
        }
    }, [dropdownRef])

    // Display the dropdown
    return (
        <>
            <div className="dropdown" ref={dropdownRef}>
                {/* Dropdown Button */}
                <DropdownButton toggle={toggleDropdown} open={open}>
                    {/* The icon displayed to the left of time or number of notes */}
                    {isTimeBased ? <PiTimerBold className='timer-icon'/> : <BsMusicNoteList className='notes-icon'/>}
                    
                    {/* The text for either time or number of notes */}
                    {buttonText}
                </DropdownButton>

                {/* Dropdown Content (hidden when closed) */}
                <DropdownContent open={open}>
                    {/* Either time or number of notes based dropdown */}
                    {content}
                </DropdownContent>
            </div>
        </>
    )
}

export default Dropdown;