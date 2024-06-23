
// listen for popup events, open and close, and if they happen too often, show a message to allow the user to disable them

document.addEventListener('popup-opened', handlePopupOpened);
document.addEventListener('popup-closed', handlePopupClosed);

let popupOpenTimes = [];
let popupCloseTimes = [];

function handlePopupOpened() {
    popupOpenTimes.push(Date.now());
    if (popupOpenTimes.length > 5) {
        popupOpenTimes.shift();
    }
    checkPopupFrequency();
    }

function handlePopupClosed() {
    popupCloseTimes.push(Date.now());
    if (popupCloseTimes.length > 5) {
        popupCloseTimes.shift();
    }
    checkPopupFrequency();
}

function checkPopupFrequency() {
    if (popupOpenTimes.length >= 5 && popupCloseTimes.length >= 5) {
        const openTime = popupOpenTimes[popupOpenTimes.length - 1] - popupOpenTimes[0];
        const closeTime = popupCloseTimes[popupCloseTimes.length - 1] - popupCloseTimes[0];
        if (openTime < 5000 && closeTime < 5000) {
            showPopupFrequencyMessage();
        }
    }
}

function showPopupFrequencyMessage() {
    const message = 'You have opened and closed a popup window too many times in a short period of time. Would you like to disable popup windows?';
    alert(message);
}