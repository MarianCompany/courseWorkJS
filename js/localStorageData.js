function setAnketsData(json) {
    localStorage.setItem('ankets', JSON.stringify(json));
}

function getAnketsData() {
    let dataFromLocalStorage = localStorage.getItem('ankets');
    if(dataFromLocalStorage !== null) {
        return JSON.parse(localStorage.getItem('ankets'));
    } else {
        return null;
    }

}