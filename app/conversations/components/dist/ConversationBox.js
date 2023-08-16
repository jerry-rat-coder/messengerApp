'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var date_fns_1 = require("date-fns");
var react_2 = require("next-auth/react");
var clsx_1 = require("clsx");
var useOtherUsers_1 = require("@/app/hooks/useOtherUsers");
var AvatarGroup_1 = require("@/app/components/AvatarGroup");
var Avatar_1 = require("@/app/components/Avatar");
var ConversationBox = function (_a) {
    var _b, _c;
    var data = _a.data, selected = _a.selected;
    var router = navigation_1.useRouter();
    var session = react_2.useSession();
    var otherUser = useOtherUsers_1["default"](data);
    var handleClick = react_1.useCallback(function () {
        router.push("/conversations/" + (data === null || data === void 0 ? void 0 : data.id));
    }, [data === null || data === void 0 ? void 0 : data.id]);
    var lastMessage = react_1.useMemo(function () {
        var messages = (data === null || data === void 0 ? void 0 : data.messages) || [];
        return messages[messages.length - 1];
    }, [data === null || data === void 0 ? void 0 : data.messages]);
    var userEmail = react_1.useMemo(function () {
        var _a, _b;
        return (_b = (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.email;
    }, [(_c = (_b = session === null || session === void 0 ? void 0 : session.data) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.email]);
    var hasSeen = react_1.useMemo(function () {
        if (!lastMessage) {
            return false;
        }
        var seenArray = (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.seen) || [];
        if (!userEmail) {
            return false;
        }
        return seenArray
            .filter(function (user) { return user.email === userEmail; }).length !== 0;
    }, [lastMessage, userEmail]);
    var lastMessageText = react_1.useMemo(function () {
        if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.image) {
            return 'Seen An Image';
        }
        if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.body) {
            return lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.body;
        }
        return 'Start a conversation';
    }, [lastMessage]);
    return (React.createElement("div", { onClick: handleClick, className: clsx_1["default"]("\n        w-full \n        relative \n        flex \n        items-center \n        space-x-3 \n        p-3 \n        hover:bg-neutral-100\n        rounded-lg\n        transition\n        cursor-pointer\n        ", selected ? 'bg-neutral-100' : 'bg-white') },
        data.isGroup ? (React.createElement(AvatarGroup_1["default"], { users: data === null || data === void 0 ? void 0 : data.users })) : (React.createElement(Avatar_1["default"], { user: otherUser })),
        React.createElement("div", { className: "min-w-0 flex-1" },
            React.createElement("div", { className: "focus:outline-none" },
                React.createElement("div", { className: "flex justify-between items-center mb-1" },
                    React.createElement("p", { className: "text-md font-medium text-gray-900" }, (data === null || data === void 0 ? void 0 : data.name) || (otherUser === null || otherUser === void 0 ? void 0 : otherUser.name)),
                    React.createElement("p", { className: "text-xs text-gray-400 font-light" }, date_fns_1.format(new Date(data === null || data === void 0 ? void 0 : data.createdAt), 'p'))),
                React.createElement("p", { className: clsx_1["default"]("truncate text-sm", hasSeen ? 'text-gray-500' : 'text-black font-medium') }, lastMessageText)))));
};
exports["default"] = ConversationBox;
