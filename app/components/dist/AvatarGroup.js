'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var AvatarGroup = function (_a) {
    var _b = _a.users, users = _b === void 0 ? [] : _b;
    var slicedUsers = users.slice(0, 3);
    var postionMap = [
        'bottom-0 left-0',
        'bottom-0 right-0',
        'top-0 left-[12px]'
    ];
    return (React.createElement("div", { className: "relative w-11 h-11" }, slicedUsers.map(function (user, index) {
        var _a;
        return (React.createElement("div", { key: user.id, className: "absolute inline-block w-[21px] h-[21px] rounded-full overflow-hidden " + postionMap[index] },
            React.createElement(image_1["default"], { alt: 'Avatar', src: (_a = user.image) !== null && _a !== void 0 ? _a : '/images/placeholder.jpg', fill: true })));
    })));
};
exports["default"] = AvatarGroup;
