function getStorageItem(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
}

function setStorageItem(itemName, payload) {
    localStorage.setItem(itemName, JSON.stringify(payload));
}