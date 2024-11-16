import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { HistoryPage } from './Pages/HistoryPage'
import { HomePage } from './Pages/HomePage'
import { PlayPage } from './Pages/PlayPage'
import { ReportPage } from './Pages/ReportPage'
import { SettingsPage } from './Pages/SettingsPage'

function App() {

return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/play_area" element={<PlayPage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/report/:id" element={<ReportPage/>}/>
        </Routes>
    </Router>
)
}

export default App
