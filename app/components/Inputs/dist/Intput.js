'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var clsx_1 = require("clsx");
var Input = function (_a) {
    var label = _a.label, id = _a.id, register = _a.register, required = _a.required, errors = _a.errors, _b = _a.type, type = _b === void 0 ? 'text' : _b, disabled = _a.disabled;
    return (React.createElement("div", null,
        React.createElement("label", { className: "\r\n            block \r\n            text-sm \r\n            font-medium \r\n            leading-6 \r\n            text-gray-900\r\n          ", htmlFor: id },
            label,
            React.createElement("div", { className: 'mt-2' },
                React.createElement("input", __assign({ id: id, autoComplete: id, type: type }, register(id, { required: required }), { className: clsx_1["default"](" \n                form-input \n                block \n                w-full \n                rounded-md \n                border-0 \n                py-1.5 \n                text-gray-900 \n                shadow-sm \n                ring-1 \n                ring-inset \n                ring-gray-300 placeholder:text-gray-400 \n                focus:ring-2 \n                focus:ring-inset \n                focus:ring-sky-600 \n                sm:text-sm \n                sm:leading-6", errors[id] && "focus:ring-rose-500", disabled && "opacity-50 cursor-default") }))))));
};
exports["default"] = Input;
