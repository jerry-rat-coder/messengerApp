"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("next-auth/react");
var useOtherUsers = function (conversation) {
    var _a, _b;
    // console.log('Conversation', conversation);
    var session = react_2.useSession();
    var otherUser = react_1.useMemo(function () {
        var _a, _b;
        var sessionEmail = (_b = (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.email;
        var otherUsers = conversation === null || conversation === void 0 ? void 0 : conversation.users.filter(function (user) {
            return user.email !== sessionEmail;
        });
        return otherUsers[0];
    }, [(_b = (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.email, conversation.users]);
    return otherUser;
};
exports["default"] = useOtherUsers;
