import axios from 'axios';

export function updateGameState(gamestate) {
    var b64 = btoa(JSON.stringify(gamestate));
    const url = `http://localhost:8080/api/GET_STATE?old=${b64}`;

    axios.get(url)
        .then(response => {
            // Parse out the game state if a gamestate is returned
            // Parse out the report if a report is returned
            let str = response.data;
            console.log(str);
            return str;
        })
        .catch(error => {
            console.log(`Error: ${error.response.status}`);
        });
}

export function getHistory() {
    const url = `http://localhost:8080/api/LIST_REPORTS`;

    return axios.get(url)
        .then(response => {
            // Save the history json
            try {
                return response.data;
            } catch (err) {
                console.error('Error writing to localStorage:', err);
            }
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        });
}

export function getReport(id) {
    const url = `http://localhost:8080/api/GET_REPORT?id=${id}`;

    return axios.get(url)
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
    const url = `http://localhost:8080/api/GENERATE_PDF/id=${id}`;

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