'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("next-auth/react");
var AuthContext = function (_a) {
    var children = _a.children;
    return (React.createElement(react_1.SessionProvider, null, children));
};
exports["default"] = AuthContext;
