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
Object.defineProperty(exports, "__esModule", { value: true });
var breakpoints = {
    small: 670,
    medium: 920,
    large: 1280,
};
var responsiveTheme = Object.keys(breakpoints).reduce(function (acc, key) {
    acc.mediaQuery[key] = "@media screen and (min-width: " + breakpoints[key] + "px)";
    return acc;
}, {
    breakpoints: breakpoints,
    mediaQuery: {},
});
exports.withResponsiveTheme = function (theme) { return (__assign(__assign({}, theme), responsiveTheme)); };
