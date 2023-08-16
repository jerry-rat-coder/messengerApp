"use strict";
exports.__esModule = true;
var AuthSocialButton = function (_a) {
    var Icon = _a.icon, onClick = _a.onClick;
    return (React.createElement("button", { type: "button", onClick: onClick, className: " \r\n        inline-flex \r\n        w-full \r\n        justify-center \r\n        rounded-md \r\n        bg-white \r\n        px-4 \r\n        py-2 \r\n        text-gray-500\r\n        shadow-sm  \r\n        ring-1 \r\n        ring-inset \r\n        ring-gray-300\r\n        hover:bg-gray-50 \r\n        focus:outline-offset-0" },
        React.createElement(Icon, null)));
};
exports["default"] = AuthSocialButton;
