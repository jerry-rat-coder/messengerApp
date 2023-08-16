'use client';
"use strict";
exports.__esModule = true;
var Modal_1 = require("./Modal");
var image_1 = require("next/image");
var ImageModal = function (_a) {
    var src = _a.src, isOpen = _a.isOpen, onClose = _a.onClose;
    if (!src) {
        return null;
    }
    return (React.createElement(Modal_1["default"], { isOpen: isOpen, onClose: onClose },
        React.createElement("div", { className: "w-[640px] h-[640px]" },
            React.createElement(image_1["default"], { src: src, alt: 'Image', className: "object-cover", fill: true }))));
};
exports["default"] = ImageModal;
