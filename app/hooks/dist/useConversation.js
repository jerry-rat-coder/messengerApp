"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var useConversation = function () {
    var params = navigation_1.useParams();
    var conversationId = react_1.useMemo(function () {
        if (!(params === null || params === void 0 ? void 0 : params.conversationId)) {
            return '';
        }
        return params === null || params === void 0 ? void 0 : params.conversationId;
    }, [params === null || params === void 0 ? void 0 : params.conversationId]);
    var isOpen = react_1.useMemo(function () { return !!conversationId; }, [conversationId]);
    return react_1.useMemo(function () { return ({
        isOpen: isOpen,
        conversationId: conversationId
    }); }, [isOpen, conversationId]);
};
exports["default"] = useConversation;
