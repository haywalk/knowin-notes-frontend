
export function updateGameState(gamestate){

    var b64 = btoa(JSON.stringify(gamestate));

    const url = `http://localhost:8088/api/GET_STATE?old=${b64}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            // Parse out the JSON string and return the game state object
            // It may be a report object so check the returned object first
            console.log(xhr.responseText);
            console.log(atob(xhr.responseText));
            // return JSON.parse(xhr.responseText);
        } 
        else{
            console.log(`Error: ${xhr.status}`);
        }
    };
}

export function getHistory(){

    const url = `http://localhost:8088/api/LIST_REPORTS`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200){
            // Parse out the history JSON and return it.
            console.log(xhr.responseText);
            // return JSON.parse(xhr.responseText);
        } 
        else{
            console.log(`Error: ${xhr.status}`);
        }
    };
}