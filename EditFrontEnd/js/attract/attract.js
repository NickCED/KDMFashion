// Import any necessary libraries or modules
import gsap from 'gsap';

import { currentPage } from './nav.js';
// Define any global variables or constants

import { attractData } from './attract.json';
// Define functions or event handlers
const attractScreen = document.getElementById('Attract');
// Perform any necessary initialization
function loadAttract() {
  // Code to load attract content (e.g., images, videos, text) from a JSON file
  // and display it on the kiosk screen
  // Code to handle user interactions (e.g., touch events, button presses) during the attract mode

  startAttractLoop();
}
function attractOut(callback) {
  // Code to animate the transition out of the attract mode
  // and transition into the main application
  let tl = gsap.timeline();
  tl.to(attractScreen, { autoAlpha: 0, duration: 1 });
  tl.to(home, { autoAlpha: 1, duration: 1 }, '>-.5');
}
// Start the attract loop
function startAttractLoop() {
  // Code to display attract content (e.g., images, videos, text) on the kiosk screen
  // Code to transition to the main application when a user interacts with the kiosk
}

//Export loadAttract function
module.exports = {
  loadAttract,
  attractOut,
  startAttractLoop,
};
