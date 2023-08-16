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
var react_select_1 = require("react-select");
var Select = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, options = _a.options, disabled = _a.disabled;
    return (React.createElement("div", { className: "z-[100]" },
        React.createElement("label", { className: "block text-sm font-medium leading-6 text-gray-900" }, label),
        React.createElement("div", { className: "mt-2" },
            React.createElement(react_select_1["default"], { isDisabled: disabled, value: value, onChange: onChange, isMulti: true, options: options, menuPortalTarget: document.body, styles: {
                    menuPortal: function (base) { return (__assign(__assign({}, base), { zIndex: 9999 })); }
                }, classNames: {
                    control: function () { return 'text-sm'; }
                } }))));
};
exports["default"] = Select;
