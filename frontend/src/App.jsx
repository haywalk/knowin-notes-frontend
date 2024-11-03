import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home'
import { Settings } from './Pages/settings'
import { PlayArea } from './Pages/play_area'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/play_area" element={<PlayArea/>}/>
      </Routes>
    </Router>
  )
}

export default App
