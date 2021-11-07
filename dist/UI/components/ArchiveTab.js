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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ArchiveTab = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var antd_2 = require("antd");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var electron_1 = require("electron");
var dialog = electron_1.remote.dialog;
var Footer = antd_2.Layout.Footer, Content = antd_2.Layout.Content;
var SupportedFormats = ['Text', 'HTML', 'PDF', 'Single Png', 'Multiple Png'];
var ArchiveTab = function () {
    var onClick = function (_a) {
        var key = _a.key;
        setSelectedFileFormat(SupportedFormats[key]);
        antd_1.message.info("Click on item " + key);
    };
    var chooseFolder = function () { return __awaiter(void 0, void 0, void 0, function () {
        var path;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dialog.showOpenDialog({
                        properties: ['openDirectory']
                    })];
                case 1:
                    path = _a.sent();
                    console.log(path);
                    if (path.canceled) {
                        console.log("User canceled the change path dialog.");
                    }
                    else {
                        //TODO: take the last folder name and update it in UI
                    }
                    antd_1.message.info("Folder selected.");
                    return [2 /*return*/];
            }
        });
    }); };
    var fileFormat = (react_1["default"].createElement(antd_1.Menu, { onClick: onClick },
        react_1["default"].createElement(antd_1.Menu.Item, { key: "0" }, "Text"),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "1" }, "HTML"),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "2" }, "PDF"),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "3" }, "Single png"),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "4" }, "Multiple png")));
    var menu = (react_1["default"].createElement(antd_1.Menu, null,
        react_1["default"].createElement(antd_1.Menu.Item, { key: "1" },
            react_1["default"].createElement(antd_1.Checkbox, null, "User1")),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "2" },
            react_1["default"].createElement(antd_1.Checkbox, null, "User1")),
        react_1["default"].createElement(antd_1.Menu.Item, { key: "3" },
            react_1["default"].createElement(antd_1.Checkbox, null, "User1"))));
    var handleVisibleChange = function (flag) {
        setOverlayVisible(flag);
    };
    var _a = (0, react_1.useState)('Text'), SelectedFileFormat = _a[0], setSelectedFileFormat = _a[1];
    var _b = (0, react_1.useState)(false), OverlayVisible = _b[0], setOverlayVisible = _b[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_2.Layout, { style: { backgroundColor: 'transparent', margin: 10 } },
            react_1["default"].createElement(Content, { style: { textAlign: 'center', minHeight: '78vh', background: 'transparent', display: 'table' } },
                react_1["default"].createElement("p", { className: 'natural-language-control', style: { display: 'table-cell', verticalAlign: 'middle', fontSize: '-webkit-xxx-large' } },
                    "Download chats of ",
                    react_1["default"].createElement(antd_1.Dropdown, { visible: OverlayVisible, overlay: menu, onVisibleChange: handleVisibleChange },
                        react_1["default"].createElement("a", { className: "ant-dropdown-link", href: "#" }, "Chat1 and Chat2")),
                    " in ",
                    react_1["default"].createElement(antd_1.Dropdown, { overlay: fileFormat },
                        react_1["default"].createElement("a", null, SelectedFileFormat)),
                    " format and save it on ",
                    react_1["default"].createElement("a", { onClick: chooseFolder }, "Desktop"),
                    ".")),
            react_1["default"].createElement(Footer, { style: { textAlign: 'center', background: 'transparent' } },
                react_1["default"].createElement(antd_1.Button, { type: "primary", icon: react_1["default"].createElement(icons_1.DownloadOutlined, null), size: 'large' }, "Start")))));
};
exports.ArchiveTab = ArchiveTab;
//# sourceMappingURL=ArchiveTab.js.map