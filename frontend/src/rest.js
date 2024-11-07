
import GameState from "./GameState.js"

export function updateGameState(gamestate){
    const url = `http://localhost:8088/api/GET_STATE?old=${JSON.stringify(gamestate)}`;
    console.log(url);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => 
    {
        if (xhr.readyState == 4 && xhr.status == 200) 
        {
            return JSON.parse(xhr.response);
        } else 
        {
            console.log(`Error: ${xhr.status}`);
        }
    };
}