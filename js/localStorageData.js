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

function setAnketsArchiveData(json) {
    localStorage.setItem('archive', JSON.stringify(json));
}

function getAnketsArchiveData() {
    let dataFromLocalStorage = localStorage.getItem('archive');
    if(dataFromLocalStorage !== null) {
        return JSON.parse(localStorage.getItem('archive'));
    } else {
        return null;
    }
}