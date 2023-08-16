"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var AuthForm_1 = require("./components/AuthForm");
function Auth() {
    return (React.createElement("div", { className: "\n        flex \n        min-h-full \n        flex-col \n        justify-center \n        py-12 \n        sm:px-6 \n        lg:px-8 \n        bg-gray-100\n      " },
        React.createElement("div", { className: "sm:mx-auto sm:w-full w-full sm:max-w-md" },
            React.createElement(image_1["default"], { className: "mx-auto w-auto", width: 48, height: 48, src: "/images/logo.png", alt: "logo" }),
            React.createElement("h2", { className: "\n        mt-6 \n        text-center \n        text-3xl \n        font-bold \n        tracking-tight \n      text-gray-900\n      " }, "Sign in to your account")),
        React.createElement(AuthForm_1["default"], null))
    // <div className=" text-white w-auto flex">
    //   <div className="bg-sky-300 w-[200px]">123</div>
    //   <div className="bg-green-300 w-[200px]">123</div>
    //   <div className="bg-black w-[200px]">123</div>
    // </div>
    );
}
exports["default"] = Auth;
