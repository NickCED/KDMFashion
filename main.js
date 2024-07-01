// main.js
const path = require('path');
const fs = require('fs');
const { app, BrowserWindow, ipcMain, screen } = require('electron');
let mainWindow;
function createWindow() {
  const displays = screen.getAllDisplays();

  const externalDisplay = displays.find(display => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });
  let monX = externalDisplay ? externalDisplay.bounds.x : 0;
  let monY = externalDisplay ? externalDisplay.bounds.y : 0;
  console.log('BrowserWindow dir : ', path.join(__dirname, 'preload.js'));
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    // resizable: false,
    // movable: false,
    x: monX,
    y: monY,

    // alwaysOnTop: true,
    fullscreen: true,
    // skipTaskbar: true,
    // kiosk: true,
    frame: false,

    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.webContents.openDevTools({ mode: 'detach' });
  // Determine whether the app is in development or production and set the start URL accordingly

  let startURL = path.join(__dirname, 'dist', 'index.html');

  mainWindow.loadFile(startURL);
  console.log('startURL: ', startURL);

  // Default method for receiving messages from the front end
  // Handle communication from the front end
  ipcMain.on('messageFromFrontend', (event, message) => {
    console.log('Received message from front end:', message);
    // Do something with the message
  });
}

// Default method for sending messages to the front end
// Send a message to the front end
//mainWindow.webContents.send('messageFromBackend', 'Hello from the backend!');

app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Add any node.js code for the application logic here
// Example: Read and write files
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.writeFile('file.txt', 'Hello, world!', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });
ipcMain.handle('get-images', async (event, dir) => {
  console.log('Current directory: ', __dirname);
  const imagesDir = path.join(__dirname, 'images');
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
  return imageFiles.map(file => path.join('images', file));
});
