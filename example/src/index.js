import app           from 'app';
import {join}        from 'path';
import BrowserWindow from 'browser-window';

var mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({});
  mainWindow.loadUrl(`file://${join(__dirname, 'front.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
});
