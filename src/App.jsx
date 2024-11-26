import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home, History, Settings, PlayArea, Report } from './Pages/page_import.js'
import './App.css'

function App() {

return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/play_area" element={<PlayArea/>}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/report/:id" element={<Report/>}/>
        </Routes>
    </Router>
)
}

export default App
