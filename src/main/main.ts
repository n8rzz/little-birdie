import * as path from 'path';
import * as Electron from 'electron';
import { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain } from 'electron';
import { is } from 'electron-util';
import * as unhandled from 'electron-unhandled';
/// const {autoUpdater} = require('electron-updater');
import * as debug from 'electron-debug';
import * as contextMenu from 'electron-context-menu';
import config from './config';
import menu from './menu';
import { getFeedList } from './feed.service';

unhandled();
debug();
contextMenu();

// app.setAppUserModelId(packageJson.build.appId);

// Uncomment this before publishing your first version.
// It's commented out as it throws an error if there are no published versions.
// if (!is.development) {
// 	const FOUR_HOURS = 1000 * 60 * 60 * 4;
// 	setInterval(() => {
// 		autoUpdater.checkForUpdates();
// 	}, FOUR_HOURS);
//
// 	autoUpdater.checkForUpdates();
// }

// Prevent window from being garbage collected
let mainWindow: Electron.BrowserWindow;
let tray: Electron.Tray;
let rssItems: any[] = [];

const createMainWindow = async () => {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    show: false,
    frame: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      // contextIsolation: false,
      nodeIntegration: true,
    }
  });

  win.on('closed', () => {
    // Dereference the window
    // For multiple windows store them in an array
    mainWindow = undefined;
  });

  await win.loadFile(path.join(__dirname, '..', 'index.html'));

  return win;
};

const createTrayIcon = () => {
  const iconPath = path.join(__dirname, '..', 'assets/little-birdie-light-icon.png');
  const icon = nativeImage.createFromPath(iconPath);
  const t = new Tray(icon);

  t.on('click', () => {
    toggleWindow();
  });

  return t;
};

const showWindow = () => {
  const windowPos = mainWindow.getBounds();
  const trayPos = tray.getBounds()
  let x = 0;
  let y = 0;

  x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2));
  y = Math.round(trayPos.y + trayPos.height);

  mainWindow.setPosition(x, y, false)
  mainWindow.show()
  mainWindow.focus()
}

// Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
  app.quit();
}

app.on('second-instance', () => {
  if (!mainWindow) {
    return;
  }

  if (mainWindow.isMinimized()) {
    mainWindow.restore();
  }

  mainWindow.show();
});

app.on('window-all-closed', () => {
  if (is.macos) {
    return;
  }

  app.quit();
});

app.on('activate', async () => {
  if (mainWindow) {
    return;
  }

  mainWindow = await createMainWindow();
});

ipcMain.addListener('rss-request', async (event: any) => {
  const now = (new Date()).getTime();
  const lastUpdateTimestamp = config.get('lastUpdateTimestamp');
  const distanceFromNow = now - lastUpdateTimestamp;

  console.log('distanceFromNow', distanceFromNow);

  if (distanceFromNow < 5000) {
    return;
  }

  await getFeedList();

  console.log('rssItems', rssItems.length);

  config.set('lastUpdateTimestamp', (new Date()).getTime());
  event.sender.send('rss-success', rssItems);
});

const toggleWindow = () => {
  if (mainWindow.isVisible()) {
    mainWindow.hide()

    return;
  }

  showWindow();
};

const loadFeedItems = async () => {
  rssItems = await getFeedList();
}

(async () => {
  config.clear();

  await app.whenReady();
  await loadFeedItems();

  app.dock.hide();
  Menu.setApplicationMenu(menu);

  mainWindow = await createMainWindow();
  tray = createTrayIcon();

  const lastUpdateTimestamp = config.get('lastUpdateTimestamp');
  // const refreshInterval = config.get('refreshInterval');
  // const shouldNotifyOnNewAlert = config.get('shouldNotifyOnNewAlert');
  console.log('lastUpdateTimestamp: ', lastUpdateTimestamp);
})();
