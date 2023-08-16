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
var Button_1 = require("@/app/components/Button");
var Intput_1 = require("@/app/components/Inputs/Intput");
var Select_1 = require("@/app/components/Inputs/Select");
var Modal_1 = require("@/app/components/modals/Modal");
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_hot_toast_1 = require("react-hot-toast");
var GroupChatModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, users = _a.users;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_hook_form_1.useForm({
        defaultValues: {
            name: '',
            members: []
        }
    }), register = _c.register, setValue = _c.setValue, watch = _c.watch, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    var members = watch('members');
    var onSubmit = function (data) {
        setIsLoading(true);
        axios_1["default"].post('/api/conversation', __assign(__assign({}, data), { isGroup: true }))
            .then(function () {
            router.refresh();
            onClose();
        })["catch"](function () { return react_hot_toast_1.toast.error('Something went wrond!'); })["finally"](function () {
            setIsLoading(false);
        });
    };
    return (React.createElement(Modal_1["default"], { isOpen: isOpen, onClose: onClose },
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement("div", { className: "space-y-12" },
                React.createElement("div", { className: "border-b border-gray-900/10 pb-12" },
                    React.createElement("h2", { className: "\r\n                        text-base \r\n                        font-semibold \r\n                        leading-7 \r\n                        text-gray-900\r\n                      " }, "Create a group chat"),
                    React.createElement("p", { className: "mt-1 text-sm leading-6 text-gray-600" }, "Create a chat with more than 2 people."),
                    React.createElement("div", { className: "mt-8 flex flex-col gap-y-8" },
                        React.createElement(Intput_1["default"], { disabled: isLoading, label: "Name", id: "name", errors: errors, required: true, register: register }),
                        React.createElement(Select_1["default"], { disabled: isLoading, value: members, label: "Members", options: users.map(function (user) { return ({
                                value: user.id,
                                label: user.name
                            }); }), onChange: function (value) { return setValue('members', value, {
                                shouldValidate: true
                            }); } })))),
            React.createElement("div", { className: "mt-6 flex items-center justify-end gap-x-6" },
                React.createElement("div", { className: "flex gap-2" },
                    React.createElement(Button_1["default"], { disabled: isLoading, secondary: true, onClick: onClose }, "cancel"),
                    React.createElement(Button_1["default"], { type: "submit", disabled: isLoading }, "Create"))))));
};
exports["default"] = GroupChatModal;
