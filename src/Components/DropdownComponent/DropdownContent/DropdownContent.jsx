import React from 'react'
import "./DropdownContent.css" // Import CSS for styling

/**
 * Content in the dropdown component
 * 
 * @author Anthony Arseneau
 * 
 * @param {Object} props - Parameters
 * @param {React.ReactNode} props.children - The content of the dropdown
 * @param {boolean} props.open - Is the dropdown open
 * @returns {JSX.Element} - The dropdown content
 */
const DropdownContent = ({children, open}) => {
    // Display the content
    return (
        <>
            {/* Show the content if dropdown is open */}
            <div className={`dropdown-content ${(open) ? "content-open" : null}`}>
                {children}
            </div>
        </>
    )
}

export default DropdownContent;