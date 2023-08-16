"use strict";
exports.__esModule = true;
var react_1 = require("react");
var pusher_1 = require("../libs/pusher");
var useActive_1 = require("./useActive");
var useActiveChannel = function () {
    var _a = useActive_1["default"](), set = _a.set, add = _a.add, remove = _a.remove;
    var _b = react_1.useState(null), activeChannel = _b[0], setActiveChannel = _b[1];
    react_1.useEffect(function () {
        var channel = activeChannel;
        if (!channel) {
            channel = pusher_1.pusherClient.subscribe('presence-messenger');
            setActiveChannel(channel);
        }
        channel.bind("pusher:subscription_succeeded", function (members) {
            var initialMembers = [];
            members.each(function (member) { return initialMembers.push(member.id); });
            set(initialMembers);
        });
        channel.bind("pusher:member_added", function (member) {
            add(member.id);
        });
        channel.bind("pusher:member_removed", function (member) {
            remove(member.id);
        });
        return function () {
            if (activeChannel) {
                pusher_1.pusherClient.unsubscribe('presence-messenger');
                setActiveChannel(null);
            }
        };
    }, [activeChannel, set, add, remove]);
};
exports["default"] = useActiveChannel;
