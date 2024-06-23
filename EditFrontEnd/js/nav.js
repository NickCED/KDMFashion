

import { attractOut } from "./attract/attract.js";
// variable for current page object with all the data
const currentPage = {
    depth: 0,
    title: "Attract",
    data: {},
    currentUserId: 0,
    userSettings: {},
}
document.addEventListener('click', handleNavClick);

// routing click function
function handleNavClick(e) {
switch (currentPage.depth) {
    case 0:
        attractOut();
        break;
    case 1:
        clumpClick(e);
        break;
    case 2:
        itemClick(e);
        break;
    default:
        break;
}
}

// navigation functions

function attractToHome(e){
    currentPage.depth = 1;
    currentPage.title = "Home";
    currentPage.data = {};
    attractOut(loadHome());
}

function homeToClump(clumpSelected) {
    currentPage.depth = 2;
    currentPage.title = clumpSelected.title;
    currentPage.data = clumpSelected.data;
    homeOut(loadClump(clumpSelected))


}

function clumpToClump(clumpSelected) {
    currentPage.depth = 2;
    currentPage.title = clumpSelected.title;
    currentPage.data = clumpSelected.data;
    
}

module.exports = {
    attractToHome,
    homeToClump,
    clumpToClump,
    handleNavClick,
    currentPage,
}