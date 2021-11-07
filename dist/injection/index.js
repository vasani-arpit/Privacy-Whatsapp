/**
 * This script contains WAPI functions that need to be run in the context of the webpage
 */
/**
 * Auto discovery the webpack object references of instances that contains all functions used by the WAPI
 * functions and creates the Store object.
 */
var ipcRenderer = require("electron").ipcRenderer;
// var checkChrome60 = setInterval(()=>{
//     const title_element = document.querySelector(".landing-title");
//     if (title_element && title_element.innerHTML.includes("Google Chrome")) {
//         clearInterval(checkChrome60)
//         console.log("unregistering service worker")
//         //ipcRenderer.send("flush-session-data")
//         if (window.navigator.serviceWorker) {
//             console.log("Found service worker")
//             window.navigator.serviceWorker.getRegistrations().then((registrations) => {
//                 for (let registration of registrations) {
//                     registration.unregister();
//                 }
//             });
//         }
//         setTimeout(() => {
//             window.location.reload();
//         }, 1000)
//     }
// }, 200)
window.addEventListener("load", function () {
    var isLogin = setInterval(function () {
        var laptopIcon = document.querySelector('[data-icon=laptop]');
        if (laptopIcon) {
            ipcRenderer.send("log", "user has loggedIn let the show begin");
            clearInterval(isLogin);
            //loadWapi()
            ipcRenderer.send("inject");
        }
        else {
            ipcRenderer.send("log", "user is not logged in. can't do more about it.");
        }
    }, 1000);
});
//# sourceMappingURL=index.js.map