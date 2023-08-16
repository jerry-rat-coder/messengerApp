'use client';
"use strict";
exports.__esModule = true;
var useRoutes_1 = require("@/app/hooks/useRoutes");
var useConversation_1 = require("@/app/hooks/useConversation");
var MobileFooterItem_1 = require("./MobileFooterItem");
var MobileFooter = function () {
    var isOpen = useConversation_1["default"]().isOpen;
    var routes = useRoutes_1["default"]();
    if (isOpen) {
        return null;
    }
    return (React.createElement("div", { className: "\r\n        fixed\r\n        bottom-0\r\n        bg-white\r\n        w-full\r\n        flex\r\n        justify-between\r\n        items-center\r\n        z-40\r\n        border-t-[1px]\r\n        lg:hidden\r\n        " }, routes.map(function (item) {
        return (React.createElement(MobileFooterItem_1["default"], { key: item === null || item === void 0 ? void 0 : item.label, label: item === null || item === void 0 ? void 0 : item.label, icon: item === null || item === void 0 ? void 0 : item.icon, href: item === null || item === void 0 ? void 0 : item.href, active: item === null || item === void 0 ? void 0 : item.active, onClick: item === null || item === void 0 ? void 0 : item.onClick }));
    })));
};
exports["default"] = MobileFooter;
