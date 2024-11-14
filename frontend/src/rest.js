import axios from 'axios';

export function updateGameState(gamestate) {
    var b64 = btoa(JSON.stringify(gamestate));
    const url = `http://localhost:8088/api/GET_STATE?old=${b64}`;

    axios.get(url)
        .then(response => {
            // Parse out the game state if a gamestate is returned
            // Parse out the report if a report is returned
            console.log(response.data);
            console.log(atob(response.data));
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}

export function getHistory() {
    const url = `http://localhost:8088/api/LIST_REPORTS`;

    axios.get(url)
        .then(response => {
            // Parse out the history JSON and return it.
            console.log(response.data);
            // return JSON.parse(response.data);
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}