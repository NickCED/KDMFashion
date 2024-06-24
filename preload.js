const { contextBridge, ipcRenderer } = require('electron');

// Expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

// Add any additional API or functionality here

// Example: Send a message from renderer process to main process
ipcRenderer.send('messageFromRenderer', 'Hello from renderer process!');

// Example: Receive a message from main process in renderer process
ipcRenderer.on('messageFromMain', (event, message) => {
  console.log('Received message from main process:', message);
});

contextBridge.exposeInMainWorld('api', {
  getImages: dir => ipcRenderer.invoke('get-images', dir),
});
