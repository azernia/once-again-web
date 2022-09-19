import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const ROOT_PATH = join(__dirname, '../../');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 700,
        height: 500
    });
    mainWindow.loadFile(`${ROOT_PATH}/dist/frontend/index.html`);
    // if (app.isPackaged) {
    //     mainWindow.loadFile(indexHTML);
    // } else {
    //     mainWindow.loadURL('http://localhost:9000');
    // }
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
