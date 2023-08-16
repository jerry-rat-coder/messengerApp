'use client';
"use strict";
exports.__esModule = true;
var Avatar_1 = require("@/app/components/Avatar");
var axios_1 = require("axios");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var LoadingModal_1 = require("@/app/components/modals/LoadingModal");
var UserBox = function (_a) {
    var data = _a.data;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var handleClick = react_1.useCallback(function () {
        // console.log('数据id', data?.id);
        setIsLoading(true);
        axios_1["default"].post('/api/conversation', {
            userId: data === null || data === void 0 ? void 0 : data.id
        }).then(function (res) {
            router.push("/conversations/" + res.data.id);
        })["finally"](function () {
            setIsLoading(false);
        });
    }, [data, router]);
    return (React.createElement(React.Fragment, null,
        isLoading && React.createElement(LoadingModal_1["default"], null),
        React.createElement("div", { onClick: handleClick, className: " flex items-center w-full rounded-lg p-3 space-x-3 bg-white relative cursor-pointer transition hover:bg-neutral-100" },
            React.createElement(Avatar_1["default"], { user: data }),
            React.createElement("div", { className: "min-w-0 flex-1" },
                React.createElement("div", { className: "focus:outline-none" },
                    React.createElement("div", { className: "flex justify-between items-center mb-1" },
                        React.createElement("p", { className: "text-sm font-mediumt text-gray-99 " }, data === null || data === void 0 ? void 0 : data.name)))))));
};
exports["default"] = UserBox;
