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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var theme_1 = __importDefault(require("@sprinklr/style-dictionary/lib/dark/theme"));
var baseui_1 = require("baseui");
var shared_1 = require("./shared");
var primitives = __assign(__assign({}, baseui_1.darkThemePrimitives), shared_1.sharedPrimitives);
var overrides = {
    colors: { spr: theme_1.default.spr },
};
var theme = baseui_1.createTheme(primitives, overrides);
exports.DarkTheme = __assign(__assign({ name: 'dark-theme' }, theme), { colors: __assign(__assign({}, theme.colors), baseui_1.DarkTheme.colors) });
