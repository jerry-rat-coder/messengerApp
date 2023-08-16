"use strict";
exports.__esModule = true;
var UserBox_1 = require("./UserBox");
var UserList = function (_a) {
    var items = _a.items;
    return (React.createElement("aside", { className: "fixed inset-y-0 pb-20 overflow-y-auto lg:block lg:left-20 lg:pb-0 lg:w-80 block w-full left-0 border-r border-gray-200" },
        React.createElement("div", { className: "px-5" },
            React.createElement("div", { className: "flex flex-co" },
                React.createElement("div", { className: "text-neutral-800 font-bold py-4 text-2xl" }, "People")),
            items.map(function (item) { return (React.createElement(UserBox_1["default"], { key: item.id, data: item })); }))));
};
exports["default"] = UserList;
