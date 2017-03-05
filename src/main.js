const {app, BrowserWindow} = require('electron');
const path = require('path');

let win;

app.on('ready', _ => {
  win = new BrowserWindow({
    height: 600,
    width: 400
  });

  win.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);

  win.on('close', _ => {
    win = null;
  });
});