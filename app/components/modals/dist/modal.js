'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var io5_1 = require("react-icons/io5");
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children;
    return (React.createElement(react_1.Transition.Root, { as: react_2.Fragment, show: isOpen },
        React.createElement(react_1.Dialog, { onClose: onClose, as: 'div', className: 'z-50 relative' },
            React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                React.createElement("div", { className: "\r\n                        fixed \r\n                        inset-0 \r\n                        bg-gray-500 \r\n                        bg-opacity-75 \r\n                        transition-opacity\r\n                        " })),
            React.createElement("div", { className: "z-10 fixed inset-0 overflow-y-auto" },
                React.createElement("div", { className: "flex justify-center items-center min-h-full text-center p-4 sm:p-0" },
                    React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        React.createElement(react_1.Dialog.Panel, { className: 'relative transform bg-white px-4 pt-5 pb-4 transition-all text-left rounded-lg shadow-xl overflow-hidden sm:w-full sm:max-w-lg sm:p-6 sm:my-8' },
                            React.createElement("div", { className: " hidden sm:block absolute right-0 top-0 pt-4 pr-4 z-10" },
                                React.createElement("button", { type: 'button', onClick: onClose, className: " rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none" },
                                    React.createElement("span", { className: "sr-only" }, "Close"),
                                    React.createElement(io5_1.IoClose, { className: "h-6 w-6", "aria-hidden": "true" }))),
                            children)))))));
};
exports["default"] = Modal;
