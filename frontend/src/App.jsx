import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home'
import { Settings } from './Pages/settings'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </Router>
  )
}

export default App
