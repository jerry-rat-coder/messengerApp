'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var react_spinners_1 = require("react-spinners");
var LoadingModal = function () {
    return (react_1["default"].createElement(react_2.Transition.Root, { show: true, as: react_1.Fragment },
        react_1["default"].createElement(react_2.Dialog, { as: "div", className: "relative z-50", onClose: function () { } },
            react_1["default"].createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                react_1["default"].createElement("div", { className: "\r\n              fixed \r\n              inset-0 \r\n              bg-gray-100 \r\n              bg-opacity-50\r\n              transition-opacity\r\n            " })),
            react_1["default"].createElement("div", { className: "fixed inset-0 z-10 overflow-y-auto" },
                react_1["default"].createElement("div", { className: "\r\n              flex \r\n              min-h-full \r\n              items-center \r\n              justify-center \r\n              p-4 \r\n              text-center \r\n            " },
                    react_1["default"].createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                        react_1["default"].createElement(react_2.Dialog.Panel, null,
                            react_1["default"].createElement(react_spinners_1.ClipLoader, { size: 40, color: "#0284c7" }))))))));
};
exports["default"] = LoadingModal;
