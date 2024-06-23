
const helpArea = document.getElementById('help-area');
const helpButton = document.getElementById('help-button');
const helpClose = document.getElementById('help-close');

helpButton.addEventListener('click', () => {
    openHelp();
}
);


//need help funtion

document.addEventListener('click', (e) => {
    runNeedHelp(e);
}
);

//
let clickCount = 0;
const MAX_CLICK_COUNT = 3;
const DEBOUNCE_DELAY = 1000; // 1 second

function debounce(func, delay) {
    let timerId;
    
    return function() {
        clearTimeout(timerId);
        timerId = setTimeout(func, delay);
    };
}

function runNeedHelp(e) {
    const nonClickableAreas = ['help-area', 'help-button', 'help-close'];
    const targetId = e.target.id;
    
    if (!nonClickableAreas.includes(targetId)) {
        clickCount++;
        if (clickCount >= MAX_CLICK_COUNT) {
            debounce(helpDialogue, DEBOUNCE_DELAY)();
        }
    } else {
        clickCount = 0;
    }
}

function helpDialogue() {
    // Your code for displaying the help dialogue goes here
}
