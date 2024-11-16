import { useLocation } from 'react-router-dom';
import { PlayAreaComponent } from '../Components/PlayAreaComponent'
import './PlayPage.css'

export function PlayPage() {
    const location = useLocation();
    const gameState = location.state?.gameState;
    return (
        <>
            <PlayAreaComponent gameState={gameState}/>
        </>
    )
}