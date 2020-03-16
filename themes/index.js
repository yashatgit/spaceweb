"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var dark_theme_1 = require("./dark-theme");
var light_theme_1 = require("./light-theme");
var responsive_theme_1 = require("./responsive-theme");
var THEME_TYPES;
(function (THEME_TYPES) {
    THEME_TYPES["DARK"] = "DARK";
    THEME_TYPES["LIGHT"] = "LIGHT";
})(THEME_TYPES = exports.THEME_TYPES || (exports.THEME_TYPES = {}));
exports.THEME_TYPES_TO_THEME = (_a = {},
    _a[THEME_TYPES.DARK] = responsive_theme_1.withResponsiveTheme(dark_theme_1.DarkTheme),
    _a[THEME_TYPES.LIGHT] = responsive_theme_1.withResponsiveTheme(light_theme_1.LightTheme),
    _a);
