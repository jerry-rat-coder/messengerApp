'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var clsx_1 = require("clsx");
var DesktopItem = function (_a) {
    var label = _a.label, Icon = _a.icon, active = _a.active, onClick = _a.onClick, href = _a.href;
    var handleClick = function () {
        if (onClick) {
            return onClick();
        }
    };
    return (React.createElement("li", { onClick: handleClick },
        React.createElement(link_1["default"], { href: href, className: clsx_1["default"]("\n            group\n            flex\n            justify-center\n            items-center\n            rounded-md\n            p-3\n            text-sm\n            font-semibold\n            leading-6\n            text-gray-500\n            hover:text-sky-500\n            hover:bg-gray-100\n            ", active && 'text-sky-500 bg-gray-100') },
            React.createElement(Icon, { className: " w-6 h-6 shrink-0" }),
            React.createElement("span", { className: " sr-only" }, label))));
};
exports["default"] = DesktopItem;
