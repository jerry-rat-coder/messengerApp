'use client';
"use strict";
exports.__esModule = true;
var Modal_1 = require("./Modal");
var ConfirmModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    return (React.createElement(Modal_1["default"], { isOpen: isOpen, onClose: onClose },
        React.createElement("div", null, "Confirm")));
};
exports["default"] = ConfirmModal;
