// Import the necessary modules
import { currentPage } from '../nav';
// Function to log click/touchevents
function logUserInteraction(event) {
  event.userCurrentPage = currentPage;
  // Send the event to the Electron backend using IPC communication
  window.icpRenderer.send('userInteraction', event);
}

// Function to signal a new user
function newUser() {
  // Perform actions to signal a new user
  console.log('New user activated!');

  // Send the signal to the Electron backend using IPC communication
  window.icpRenderer.send('newUser');
}

//remove EventListener
document.removeEventListener('click', logUserInteraction);
document.removeEventListener('pointerup', logUserInteraction);
document.removeEventListener('pointerdown', logUserInteraction);
document.removeEventListener('pointermove', logUserInteraction);

// Add EventListeners for click, pointerup, pointerdown, and pointermove events
document.addEventListener('click', logUserInteraction);
document.addEventListener('pointerup', logUserInteraction);
document.addEventListener('pointerdown', logUserInteraction);
document.addEventListener('pointermove', logUserInteraction);
