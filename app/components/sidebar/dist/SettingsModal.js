'use client';
"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var react_hot_toast_1 = require("react-hot-toast");
var Modal_1 = require("../modals/Modal");
var Intput_1 = require("../Inputs/Intput");
var image_1 = require("next/image");
var next_cloudinary_1 = require("next-cloudinary");
var Button_1 = require("../Button");
var SettingsModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, currentUser = _a.currentUser;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(false), isLoading = _b[0], setIsloading = _b[1];
    var _c = react_hook_form_1.useForm({
        defaultValues: {
            name: currentUser === null || currentUser === void 0 ? void 0 : currentUser.name,
            image: currentUser === null || currentUser === void 0 ? void 0 : currentUser.image
        }
    }), register = _c.register, handleSubmit = _c.handleSubmit, setValue = _c.setValue, watch = _c.watch, errors = _c.formState.errors;
    var image = watch('image');
    var handleUpload = function (res) {
        var _a;
        setValue('image', (_a = res === null || res === void 0 ? void 0 : res.info) === null || _a === void 0 ? void 0 : _a.secure_url, {
            shouldValidate: true
        });
    };
    var onSubmit = function (data) {
        setIsloading(true);
        axios_1["default"].post('/api/settings', data)
            .then(function (res) {
            router.refresh();
            onClose();
        })["catch"](function () { return react_hot_toast_1.toast.error('Something went wrong!'); })["finally"](function () { return setIsloading(false); });
    };
    return (React.createElement(Modal_1["default"], { onClose: onClose, isOpen: isOpen },
        React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
            React.createElement("div", { className: "space-y-12" },
                React.createElement("div", { className: "border-b border-gray-900/10 pb-12 " },
                    React.createElement("h2", { className: "text-base font-semibold leading-7 text-gray-900" }, "Profile"),
                    React.createElement("p", { className: "mt-1 text-sm leading-6 text-gray-600" }, "Edit your public information."),
                    React.createElement("div", { className: "mt-10 flex flex-col gap-y-8" },
                        React.createElement(Intput_1["default"], { disabled: isLoading, register: register, label: 'Name', id: "name", errors: errors, required: true }),
                        React.createElement("div", null,
                            React.createElement("label", { className: "block text-sm font-medium leading-6 text-gray-900" }, "Photo"),
                            React.createElement("div", { className: "mt-2 flex items-center gap-x-3" },
                                React.createElement(image_1["default"], { alt: 'Avatar', width: '48', height: '48', className: 'rounded-full', src: image || (currentUser === null || currentUser === void 0 ? void 0 : currentUser.image) || '/images/placeholder.jpg' }),
                                React.createElement(next_cloudinary_1.CldUploadButton, { options: { maxFiles: 1 }, onUpload: handleUpload, uploadPreset: "ed1g8bvu" },
                                    React.createElement(Button_1["default"], { disabled: isLoading, secondary: true, type: "button" }, "Change"))))))),
            React.createElement("div", { className: "mt-6 flex items-center justify-end gap-x-6" },
                React.createElement(Button_1["default"], { disabled: isLoading, secondary: true, onClick: onClose }, "Cancel"),
                React.createElement(Button_1["default"], { disabled: isLoading, type: "submit" }, "Save")))));
};
exports["default"] = SettingsModal;
