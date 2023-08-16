'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var isOnline_1 = require("../libs/isOnline");
var Avatar = function (_a) {
    var user = _a.user;
    var isActive = isOnline_1["default"](user.email).isActive;
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: " relative rounded-full inline-block overflow-hidden h-9 w-9 md:w-11 md:h-11" },
            React.createElement(image_1["default"], { src: (user === null || user === void 0 ? void 0 : user.image) || '/images/placeholder.jpg', alt: 'Avatar', fill: true })),
        isActive && (React.createElement("span", { className: " inline-block absolute top-0 right-0 bg-green-500 rounded-full w-2 h-2 md:w-3 md:h-3 ring-2 ring-white" }))));
};
exports["default"] = Avatar;
