/**
 * This script contains WAPI functions that need to be run in the context of the webpage
 */

/**
 * Auto discovery the webpack object references of instances that contains all functions used by the WAPI
 * functions and creates the Store object.
 */

const { ipcRenderer } = require("electron");

window.addEventListener("load", () => {
    const isLogin = setInterval(() => {
        let laptopIcon = document.querySelector('[data-icon=laptop]')
        if (laptopIcon) {
            ipcRenderer.send("log", "user has loggedIn let the show begin")
            ipcRenderer.send("enablesettings")
            clearInterval(isLogin)
            //loadWapi()
            ipcRenderer.send("inject")


        } else {
            ipcRenderer.send("log", "user is not logged in. can't do more about it.")
        }
    }, 1000);
})

