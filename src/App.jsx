import { Route, HashRouter as Router, Routes } from 'react-router-dom' // Import to navigate between pages
import { Home, History, Settings, PlayArea, Report } from './Pages/page_import.js' // Import pages
import './App.css' // Import CSS for styling

/**
 * The frontend application holding every page
 * 
 * @author Anthony Arseneau
 * 
 * @returns {JSX.Element} - The frontend application
 */
function App() {
    // Display the application
    return (
        <>
        {/* Routing between pages */}
        <Router>
            {/* Routes */}
            <Routes>
                {/* Home page link */}
                <Route path="/" element={<Home/>}/>
                {/* Settings page link */}
                <Route path="/settings" element={<Settings/>}/>
                {/* Play area page link */}
                <Route path="/play_area" element={<PlayArea/>}/>
                {/* History page link */}
                <Route path="/history" element={<History/>}/>
                {/* Report page link */}
                <Route path="/report/:id" element={<Report/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App
