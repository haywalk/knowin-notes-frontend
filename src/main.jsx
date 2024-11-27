import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Import starting root
import App from './App.jsx' // Import app to display application
import '../node_modules/bootstrap/dist/css/bootstrap.css' // Import bootstrap for styling
import './index.css' // Import CSS for styling

/**
 * Default landing JSX file displaying the application
 * 
 * @author Anthony Arseneau
 */
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)