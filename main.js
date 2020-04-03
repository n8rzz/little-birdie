const app = require('./dist/main/main.js');

// const path = require('path');
// const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
// const { is } = require('electron-util');
// const unhandled = require('electron-unhandled');
// /// const {autoUpdater} = require('electron-updater');
// const debug = require('electron-debug');
// const contextMenu = require('electron-context-menu');
// // const config = require('./config');
// // const menu = require('./menu');

// unhandled();
// debug();
// contextMenu();

// // app.setAppUserModelId(packageJson.build.appId);

// // Uncomment this before publishing your first version.
// // It's commented out as it throws an error if there are no published versions.
// // if (!is.development) {
// // 	const FOUR_HOURS = 1000 * 60 * 60 * 4;
// // 	setInterval(() => {
// // 		autoUpdater.checkForUpdates();
// // 	}, FOUR_HOURS);
// //
// // 	autoUpdater.checkForUpdates();
// // }

// // Prevent window from being garbage collected
// let mainWindow;
// let tray;

// const createMainWindow = async () => {
//   const win = new BrowserWindow({
//     width: 300,
//     height: 400,
//     show: false,
//     frame: false,
//     resizable: false,
//     transparent: true,
//   });

//   win.on('closed', () => {
//     // Dereference the window
//     // For multiple windows store them in an array
//     mainWindow = undefined;
//   });

//   await win.loadFile(path.join(__dirname, 'dist', 'index.html'));

//   return win;
// };

// const createTrayIcon = () => {
//   const iconPath = path.join(__dirname, 'dist', 'assets', 'little-birdie-light-icon.png');
//   const icon = nativeImage.createFromPath(iconPath);
//   const t = new Tray(icon);

//   t.on('click', () => {
//     toggleWindow();
//   });

//   return t;
// };

// const showWindow = () => {
//   const windowPos = mainWindow.getBounds();
//   const trayPos = tray.getBounds()
//   let x = 0;
//   let y = 0;

//   x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2));
//   y = Math.round(trayPos.y + trayPos.height);

//   mainWindow.setPosition(x, y, false)
//   mainWindow.show()
//   mainWindow.focus()
// }

// // Prevent multiple instances of the app
// if (!app.requestSingleInstanceLock()) {
//   app.quit();
// }

// app.on('second-instance', () => {
//   if (!mainWindow) {
//     return;
//   }

//   if (mainWindow.isMinimized()) {
//     mainWindow.restore();
//   }

//   mainWindow.show();
// });

// app.on('window-all-closed', () => {
//   if (is.macos) {
//     return;
//   }

//   app.quit();
// });

// app.on('activate', async () => {
//   if (mainWindow) {
//     return;
//   }

//   mainWindow = await createMainWindow();
// });

// const toggleWindow = () => {
//   if (mainWindow.isVisible()) {
//     mainWindow.hide()

//     return;
//   }

//   showWindow();
// };

// (async () => {
//   await app.whenReady();
//   app.dock.hide();
//   // Menu.setApplicationMenu(menu);

//   mainWindow = await createMainWindow();
//   tray = createTrayIcon();

//   // const refreshInterval = config.get('refreshInterval');
//   // const shouldNotifyOnNewAlert = config.get('shouldNotifyOnNewAlert');

//   // console.log(refreshInterval, shouldNotifyOnNewAlert);

//   // mainWindow.webContents.executeJavaScript(`document.querySelector('header p').textContent = 'Your favorite animal is ${favoriteAnimal}'`);
// })();
