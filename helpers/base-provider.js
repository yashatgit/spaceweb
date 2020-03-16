"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var baseui_1 = require("baseui");
var themes_1 = require("../themes");
exports.BaseProvider = function (props) {
    var children = props.children, themeType = props.themeType;
    return (React.createElement(baseui_1.BaseProvider, { theme: themes_1.THEME_TYPES_TO_THEME[themeType] }, children));
};
