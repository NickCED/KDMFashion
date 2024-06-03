// main.js
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    resizable: false,
    movable: false,
    x: 0,
    y: 0,
    useContentSize: true,
    alwaysOnTop: true,
    fullscreen: true,
    skipTaskbar: true,
    kiosk: true,
    frame: false,
    show: true,

    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Determine whether the app is in development or production and set the start URL accordingly

  const startURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9000'
      : `${path.join(__dirname, 'dist', 'app.html')}`;

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
