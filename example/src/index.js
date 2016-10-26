import {app, BrowserWindow} from 'electron';
import {join}               from 'path';

var mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${join(__dirname, 'front.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
});
