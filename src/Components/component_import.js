// Import dropdown component
import { Dropdown, DropdownButton, DropdownContent, NoteBasedDropdown, TimeBasedDropdown } from './DropdownComponent/dropdown_import.js';

// Import progress bar component
import ProgressBar from './ProgressBarComponent/ProgressBar.jsx'

// Import reports list component
import ReportsList from './ReportsListComponent/ReportsList.jsx'

// Import report card component
import ReportCard from './ReportCardComponent/ReportCard.jsx'

// Import keyboard component
import Keyboard from './KeyboardComponent/Keyboard.jsx';

/**
 * Export all components to allow easy import elsewhere
 * This includes:
 * (1) Dropdown - The dropdown component
 * (2) ProgressBar - The progress bar component
 * (3) ReportsList - The list of reports
 * (4) ReportCard - The card for a report
 * (5) Keyboard - The digital keyboard on screen
 * 
 * @author Anthony Arseneau
 */
export { Dropdown, DropdownButton, DropdownContent, NoteBasedDropdown, TimeBasedDropdown, ProgressBar, ReportsList, ReportCard, Keyboard };
export default { Dropdown, DropdownButton, DropdownContent, NoteBasedDropdown, TimeBasedDropdown, ProgressBar, ReportsList, ReportCard, Keyboard };