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
var radio_1 = require("baseui/radio");
var react_1 = __importDefault(require("react"));
var baseui_1 = require("baseui");
var styles_1 = require("baseui/styles");
var Radio = function (props) {
    var overrides = baseui_1.mergeOverrides({
        RadioMarkInner: {
            style: function (styleProps) {
                return {
                    backgroundColor: getInnerColor(styleProps),
                    height: '8px',
                    width: '8px'
                };
            }
        },
        RadioMarkOuter: {
            style: function (styleProps) {
                return {
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    borderColor: getBorderColor(styleProps),
                    height: '14px',
                    width: '14px'
                };
            }
        }
    }, props.overrides);
    return react_1.default.createElement(radio_1.Radio, __assign({}, props, { overrides: overrides }));
};
exports.Radio = Radio;
var DEFAULT = 0;
var HOVERED = 1;
var ACTIVE = 2;
function getState(props) {
    if (props.$isActive)
        return ACTIVE;
    if (props.$isHovered)
        return HOVERED;
    return DEFAULT;
}
function getBorderColor(props) {
    var colors = props.$theme.colors;
    if (props.$disabled && props.$isError)
        return styles_1.hexToRgb(colors.spr['support-error'], '0.5');
    if (!props.$checked) {
        if (props.$disabled)
            return colors.spr['icon-03'];
        if (props.$isError)
            return colors.spr['support-error'];
        if (props.$isHovered)
            return colors.spr['icon-hover'];
        return colors.spr['icon-03'];
    }
    else {
        if (props.$isError) {
            return colors.spr['support-error'];
            // switch (getState(props)) {
            //   case DEFAULT:
            //     return colors.spr['support-error']
            //   case HOVERED:
            //     return colors.spr['support-error']
            //   case ACTIVE:
            //     return colors.spr['support-error']
            // }
        }
        else {
            if (props.$disabled) {
                return styles_1.hexToRgb(colors.spr['focus-01'], '0.5');
            }
            return colors.spr['focus-01'];
            // switch (getState(props)) {
            //   case DEFAULT:
            //     return colors.spr['focus-01']
            //   case HOVERED:
            //     return colors.spr['icon-hover']
            //   case ACTIVE:
            //     return colors.spr['icon-hover']
            // }
        }
    }
    return null;
}
function getInnerColor(props) {
    var colors = props.$theme.colors;
    if (!props.$checked)
        return 'transparent';
    if (props.$disabled) {
        if (props.$isError)
            return styles_1.hexToRgb(colors.spr['support-error'], '0.5');
        if (props.$checked)
            return styles_1.hexToRgb(colors.spr['focus-01'], '0.5');
        return 'transparent';
    }
    if (props.$isError) {
        return colors.spr['support-error'];
    }
    return colors.spr['focus-01'];
}
var radio_2 = require("baseui/radio");
exports.StatefulRadioGroup = radio_2.StatefulRadioGroup;
exports.StatefulContainer = radio_2.StatefulContainer;
exports.RadioGroup = radio_2.RadioGroup;
exports.Root = radio_2.Root;
exports.Label = radio_2.Label;
exports.Input = radio_2.Input;
exports.Description = radio_2.Description;
exports.RadioMarkInner = radio_2.RadioMarkInner;
exports.RadioMarkOuter = radio_2.RadioMarkOuter;
exports.RadioGroupRoot = radio_2.RadioGroupRoot;
exports.ALIGN = radio_2.ALIGN;
