"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var useConversation_1 = require("./useConversation");
var react_1 = require("react");
var hi_1 = require("react-icons/hi");
var hi2_1 = require("react-icons/hi2");
var react_2 = require("next-auth/react");
var useRouteses = function () {
    var pathname = navigation_1.usePathname();
    var conversationId = useConversation_1["default"]().conversationId;
    var routes = react_1.useMemo(function () { return [
        {
            label: 'Chat',
            href: '/conversations',
            icon: hi_1.HiChat,
            active: pathname === '/conversations' || !!conversationId
        },
        {
            label: 'Users',
            href: '/users',
            icon: hi2_1.HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Logout',
            href: '#',
            onClick: function () { react_2.signOut(); },
            icon: hi2_1.HiArrowLeftOnRectangle
        }
    ]; }, [conversationId, pathname]);
    return routes;
};
exports["default"] = useRouteses;
