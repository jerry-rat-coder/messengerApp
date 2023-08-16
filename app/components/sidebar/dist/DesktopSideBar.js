'use client';
"use strict";
exports.__esModule = true;
var useRoutes_1 = require("@/app/hooks/useRoutes");
var DesktopItem_1 = require("./DesktopItem");
var Avatar_1 = require("../Avatar");
var react_1 = require("react");
var SettingsModal_1 = require("./SettingsModal");
var DesktopSideBar = function (_a) {
    var currentUser = _a.currentUser;
    var routes = useRoutes_1["default"]();
    var _b = react_1.useState(false), isSettingsOpen = _b[0], setIsSettingsOpen = _b[1];
    // console.log(currentUser);
    return (React.createElement(React.Fragment, null,
        React.createElement(SettingsModal_1["default"], { isOpen: isSettingsOpen, onClose: function () { return setIsSettingsOpen(false); }, currentUser: currentUser }),
        React.createElement("div", { className: " \r\n        hidden \r\n        lg:fixed \r\n        lg:inset-y-0 \r\n        lg:left-0 \r\n        lg:w-20 \r\n        lg:pb-4 \r\n        lg:border-r-[1px] \r\n        lg:overflow-y-auto\r\n        xl:px-6 \r\n        lg:z-40 \r\n        lg:bg-white \r\n        lg:flex \r\n        lg:flex-col \r\n        justify-between" },
            React.createElement("nav", { className: "\r\n            flex \r\n            flex-col \r\n            mt-4 \r\n            justify-between" },
                React.createElement("ul", { role: "list", className: "\r\n                flex \r\n                flex-col \r\n                items-center \r\n                space-y-1" }, routes.map(function (item) {
                    return (React.createElement(DesktopItem_1["default"], { key: item === null || item === void 0 ? void 0 : item.label, label: item === null || item === void 0 ? void 0 : item.label, icon: item === null || item === void 0 ? void 0 : item.icon, active: item === null || item === void 0 ? void 0 : item.active, onClick: item === null || item === void 0 ? void 0 : item.onClick, href: item === null || item === void 0 ? void 0 : item.href }));
                }))),
            React.createElement("nav", { className: "\r\n            flex\r\n            justify-center\r\n            items-center\r\n            mt-4\r\n            " },
                React.createElement("div", { onClick: function () { setIsSettingsOpen(true); }, className: "\r\n                cursor-pointer\r\n                hover:opacity-75\r\n                transition\r\n                " },
                    React.createElement(Avatar_1["default"], { user: currentUser }))))));
};
exports["default"] = DesktopSideBar;
