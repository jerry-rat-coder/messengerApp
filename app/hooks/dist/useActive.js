"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var zustand_1 = require("zustand");
var useActiveList = zustand_1.create(function (set) { return ({
    members: [],
    add: function (id) { return set(function (state) { return ({ members: __spreadArrays(state.members, [id]) }); }); },
    remove: function (id) { return set(function (state) { return ({ members: state.members.filter(function (memberId) { return memberId != id; }) }); }); },
    set: function (ids) { return set({ members: ids }); }
}); });
exports["default"] = useActiveList;
