"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
require("antd/dist/antd.css");
require("../index.css");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var HeaderTab_1 = __importDefault(require("./HeaderTab"));
function SideBar() {
    var Sider = antd_1.Layout.Sider;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_1.Layout, null,
            react_1["default"].createElement(Sider, { breakpoint: "lg", collapsedWidth: "0", onBreakpoint: function (broken) {
                    console.log(broken);
                }, onCollapse: function (collapsed, type) {
                    console.log(collapsed, type);
                } },
                react_1["default"].createElement("div", { className: "logo" }),
                react_1["default"].createElement(antd_1.Menu, { theme: "dark", mode: "inline", defaultSelectedKeys: ['4'] },
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "1", icon: react_1["default"].createElement(icons_1.UserOutlined, null), onClick: function () { return console.log("blur contact names"); } }, "Blur contact names"),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "2", icon: react_1["default"].createElement(icons_1.FileImageOutlined, null), onClick: function () { return console.log("blur images"); } }, "bblur contact images"),
                    react_1["default"].createElement(antd_1.Menu.Item, { key: "3", icon: react_1["default"].createElement(icons_1.MessageOutlined, null), onClick: function () { return console.log("blur last msg"); } }, "Blur last message"),
                    react_1["default"].createElement(antd_1.Button, { type: "primary", block: true, onClick: function () { return console.log("save"); } }, "Save"))),
            react_1["default"].createElement(HeaderTab_1["default"], null))));
}
exports["default"] = SideBar;
//# sourceMappingURL=SideBar.js.map