//todo code color picker that has row of recently picked colors, 
// does not need to reset after user exit

// @ts-check
/**
 * @type {String[]}
 */
const recentColors = [];

/**
 * @param {String} newColor
 * @returns {void}
 * @description adds new color to recentColors array
 * and calls renderRecentColors
 * @example addNewColor('#ff0000')
 * */

function addNewColor(newColor){
    recentColors.push(newColor);
    if(recentColors.length > 10) recentColors.pop();
    renderRecentColors();
}
/**
 * @type {HTMLElement[]}
 */
const recentColorElements = Array.from(document.querySelectorAll('.recColorCircle'));


function renderRecentColors(){
    recentColorElements.forEach((circle,index)=>{
        circle.style.background = recentColors[index];
    })
}