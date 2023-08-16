"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google");
var ToasterContext_1 = require("./context/ToasterContext");
var AuthContext_1 = require("./context/AuthContext");
var ActiveStatus_1 = require("./components/ActiveStatus");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Messenger App',
    description: 'Messenger App'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(AuthContext_1["default"], null,
                React.createElement(ToasterContext_1["default"], null),
                React.createElement(ActiveStatus_1["default"], null),
                children))));
}
exports["default"] = RootLayout;
