import React from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa" // Up and down icons
import "./DropdownButton.css" // Import CSS for styling

/**
 * Button component for the dropdown
 * 
 * @author Anthony Arseneau
 * 
 * @param {Object} props - Parameters
 * @param {React.ReactNode} props.children - Button displayed information
 * @param {boolean} props.open - Is the dropdown open
 * @param {Function} props.toggle - Function to toggle the open state
 * 
 * @returns {JSX.Element} - The dropdown button component
 */
const DropdownButton = ({children, open, toggle}) => {
	// Display the button
	return (
		<>
			{/* Dropdown Button */}
			<div onClick={toggle} className={`dropdown-btn ${open ? "button-open" : null}`}>
				{/* Button text */}
				{children}

				{/* Arrow icon for open or close */}
				<span className="toggle-icon">
					{open ? <FaChevronUp/> : <FaChevronDown/>}
				</span>
			</div>
		</>
	)
}

export default DropdownButton;