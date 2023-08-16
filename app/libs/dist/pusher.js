"use strict";
exports.__esModule = true;
exports.pusherClient = exports.pusherServer = void 0;
var pusher_1 = require("pusher");
var pusher_js_1 = require("pusher-js");
exports.pusherServer = new pusher_1["default"]({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: 'mt1',
    useTLS: true
});
exports.pusherClient = new pusher_js_1["default"](process.env.NEXT_PUBLIC_PUSHER_APP_KEY, {
    channelAuthorization: {
        endpoint: '/api/pusher/auth',
        transport: 'ajax'
    },
    cluster: 'mt1'
});
