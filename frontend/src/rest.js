import axios from 'axios';
const fs = require('fs');
const path = require('path');

export function updateGameState(gamestate) {
    var b64 = btoa(JSON.stringify(gamestate));
    const url = `http://localhost:8080/api/GET_STATE?old=${b64}`;

    axios.get(url)
        .then(response => {
            // Parse out the game state if a gamestate is returned
            // Parse out the report if a report is returned
            let str = atob(response.data);
            console.log(str);

            if(str[0] == 'S' || str[0] == 's'){
                // Assume a state is returned
                let json = str.substring("STATE".length);
                return JSON.parse(json);
            }
            else{
                // Assume a report is returned
                let json = str.substring("REPORT".length);
                return JSON.parse(json);
            }
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}

export function getHistory() {
    const url = `http://localhost:8080/api/LIST_REPORTS`;

    axios.get(url)
        .then(response => {
            // Save the history json
            const historyFilePath = path.join(__dirname, 'db', 'history-list.json');
            fs.writeFile(historyFilePath, JSON.stringify(response.data, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to history-list.json:', err);
                } else {
                    console.log('History successfully written to history-list.json');
                }
            });
        })
        .catch(error => {
            console.log(`Error: ${error.status}`);
        });
}

export function getReport(id) {
    const url = `http://localhost:8080/api/id=` + id.toString();

    axios.get(url)
        .then(response => {
            console.log(response.data);
            return response.data; // Just a JSON of the Report
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}

// Is this unneeded now?
export function getPDF(id) {
    const url = `http://localhost:8080/api/GENERATE_PDF/id=` + id.toString();

    axios.get(url)
        .then(response => {
            // Should be a byte stream for a pdf
            console.log(response.data);
            // return JSON.parse(response.data);
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}