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
var react_1 = __importDefault(require("react"));
var tooltip_1 = require("baseui/tooltip");
var baseui_1 = require("baseui");
var Tooltip = function (props) {
    var overrides = baseui_1.mergeOverrides({
        Arrow: { style: getArrowStyle },
        Body: { style: getBodyStyle },
        Inner: { style: getInnerStyle },
    }, props.overrides);
    return react_1.default.createElement(tooltip_1.Tooltip, __assign({}, props, { overrides: overrides }));
};
function getArrowStyle(_a) {
    var $theme = _a.$theme;
    return { backgroundColor: $theme.colors.spr['tooltip-01'] };
}
function getBodyStyle(_a) {
    var $theme = _a.$theme;
    return { backgroundColor: 'transperent', boxShadow: 'none' };
}
function getInnerStyle(_a) {
    var $theme = _a.$theme;
    return {
        backgroundColor: $theme.colors.spr['tooltip-01'],
        color: $theme.colors.spr['text-06'],
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        borderColor: $theme.colors.spr['tooltip-border'],
        fontSize: '11px',
        paddingTop: $theme.sizing.scale100,
        paddingBottom: $theme.sizing.scale100,
        paddingLeft: $theme.sizing.scale300,
        paddingRight: $theme.sizing.scale300,
    };
}
exports.default = Tooltip;
