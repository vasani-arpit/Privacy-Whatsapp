"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ConversationsTab = void 0;
var react_1 = __importStar(require("react"));
var electron_1 = require("electron");
var lowdb_1 = __importDefault(require("lowdb"));
var fs_1 = require("fs");
var FileSync_1 = __importDefault(require("lowdb/adapters/FileSync"));
var path = electron_1.remote.require('path');
var userDataPath = electron_1.remote.app.getPath('userData');
var adapter = new FileSync_1["default"](path.join(userDataPath, 'db.json'));
console.log(userDataPath);
var db = (0, lowdb_1["default"])(adapter);
var existingId = db.get("machineId").value();
var randomId;
//generate rendom ID
if (existingId) {
    randomId = existingId;
}
else {
    randomId = Math.random().toString(36).substring(7);
    db.set("machineId", randomId).write();
}
console.log(randomId);
var ConversationsTab = function () {
    var webview = (0, react_1.useRef)();
    electron_1.ipcRenderer.on("injection", function () {
        console.log("Time to inject script");
        webview.current.executeJavaScript((0, fs_1.readFileSync)("src/injection/WAPI.js", 'utf-8'));
    });
    (0, react_1.useEffect)(function () {
        document.querySelector("webview").addEventListener("dom-ready", function (e) {
            console.log("dom is ready.", e.target);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            e.target.openDevTools();
        });
        document.querySelector("webview").setAttribute("src", "https://web.whatsapp.com");
    });
    return (react_1["default"].createElement("webview", { id: "WA-" + randomId, partition: "persist:mywasession" + randomId, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        disablewebsecurity: "true", useragent: "" + window.navigator.userAgent.replace(/(WArchive|Electron|warchive|PrivacyWhatsapp)([^\s]+\s)/g, ""), preload: "file://" + path.resolve(electron_1.remote.app.getAppPath(), './src/injection/index.js'), 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        className: "full-page", ref: webview }));
};
exports.ConversationsTab = ConversationsTab;
//# sourceMappingURL=ConversationsTab.js.map