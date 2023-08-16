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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var md_1 = require("react-icons/md");
var useConversation_1 = require("@/app/hooks/useConversation");
var react_1 = require("react");
var clsx_1 = require("clsx");
var GroupChatModal_1 = require("./GroupChatModal");
var ConversationBox_1 = require("./ConversationBox");
var react_2 = require("next-auth/react");
var pusher_1 = require("@/app/libs/pusher");
var lodash_1 = require("lodash");
var ConversationList = function (_a) {
    var _b, _c;
    var initialItems = _a.initialItems, users = _a.users;
    var _d = react_1.useState(initialItems), items = _d[0], setItems = _d[1];
    var _e = react_1.useState(false), isModalOpen = _e[0], setIsModalOpen = _e[1];
    var _f = useConversation_1["default"](), conversationId = _f.conversationId, isOpen = _f.isOpen; //Mobile
    var session = react_2.useSession();
    var pusherKey = react_1.useMemo(function () {
        var _a, _b;
        return (_b = (_a = session === null || session === void 0 ? void 0 : session.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.email;
    }, [(_c = (_b = session === null || session === void 0 ? void 0 : session.data) === null || _b === void 0 ? void 0 : _b.user) === null || _c === void 0 ? void 0 : _c.email]);
    react_1.useEffect(function () {
        if (!pusherKey) {
            return;
        }
        pusher_1.pusherClient.subscribe(pusherKey);
        var updateHandler = function (conversation) {
            setItems(function (current) { return current.map(function (currentConversation) {
                if (currentConversation.id === conversation.id) {
                    return __assign(__assign({}, currentConversation), { messages: conversation.messages });
                }
                return currentConversation;
            }); });
        };
        var newHandler = function (conversation) {
            setItems(function (current) {
                if (lodash_1.find(current, { id: conversation.id })) {
                    return current;
                }
                return __spreadArrays([conversation], current);
            });
        };
        var removeHandler = function (conversation) {
            setItems(function (current) {
                return __spreadArrays(current.filter(function (convo) { return convo.id !== conversation.id; }));
            });
        };
        pusher_1.pusherClient.bind('conversation:update', updateHandler);
        pusher_1.pusherClient.bind('conversation:new', newHandler);
        pusher_1.pusherClient.bind('conversation:remove', removeHandler);
        return function () {
            pusher_1.pusherClient.unsubscribe(pusherKey);
            pusher_1.pusherClient.unbind('conversation:update');
            pusher_1.pusherClient.unbind("conversation:new");
            pusher_1.pusherClient.unbind('conversation:remove');
        };
    }, [pusherKey]);
    return (React.createElement(React.Fragment, null,
        React.createElement(GroupChatModal_1["default"], { isOpen: isModalOpen, onClose: function () { return setIsModalOpen(false); }, users: users }),
        React.createElement("aside", { className: clsx_1["default"]("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200", isOpen ? 'hidden' : 'block w-full left-0') },
            React.createElement("div", { className: "px-5" },
                React.createElement("div", { className: "flex justify-between mb-4 pt-4" },
                    React.createElement("div", { className: "text-2xl font-bold text-neutral-800" }, "Message"),
                    React.createElement("div", { onClick: function () { setIsModalOpen(true); }, className: "rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition" },
                        React.createElement(md_1.MdOutlineGroupAdd, { size: 20 }))),
                items.map(function (item) { return (React.createElement(ConversationBox_1["default"], { key: item === null || item === void 0 ? void 0 : item.id, data: item, selected: conversationId === (item === null || item === void 0 ? void 0 : item.id) })); })))));
};
exports["default"] = ConversationList;
