"use strict";
exports.__esModule = true;
var useActive_1 = require("../hooks/useActive");
function isOnline(email) {
    var members = useActive_1["default"]().members;
    return {
        isActive: members.some(function (memberEmail) {
            return memberEmail === email;
        }),
        members: members
    };
}
exports["default"] = isOnline;
