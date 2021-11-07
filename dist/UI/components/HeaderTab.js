"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var ArchiveTab_1 = require("./ArchiveTab");
var ConversationsTab_1 = require("./ConversationsTab");
var TabPane = antd_1.Tabs.TabPane;
var icons_1 = require("@ant-design/icons");
var HeaderTab = function () {
    return (react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "2", centered: true },
        react_1["default"].createElement(TabPane, { tab: react_1["default"].createElement("span", null,
                react_1["default"].createElement(icons_1.WhatsAppOutlined, null),
                "Conversations"), key: "1" },
            react_1["default"].createElement(ConversationsTab_1.ConversationsTab, null)),
        react_1["default"].createElement(TabPane, { tab: react_1["default"].createElement("span", null,
                react_1["default"].createElement(icons_1.UploadOutlined, null),
                "Archive"), key: "2" },
            react_1["default"].createElement(ArchiveTab_1.ArchiveTab, null))));
};
exports["default"] = HeaderTab;
//# sourceMappingURL=HeaderTab.js.map