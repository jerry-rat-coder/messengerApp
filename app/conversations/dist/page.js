'use client';
"use strict";
exports.__esModule = true;
var useConversation_1 = require("../hooks/useConversation");
var EmptyState_1 = require("../components/EmptyState");
var clsx_1 = require("clsx");
var Conversations = function () {
    var isOpen = useConversation_1["default"]().isOpen;
    return (React.createElement("div", { className: clsx_1["default"]("lg:block lg:pl-80 h-full", isOpen ? 'block' : 'hidden') },
        React.createElement(EmptyState_1["default"], null)));
};
exports["default"] = Conversations;
