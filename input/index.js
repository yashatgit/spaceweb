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
var input_1 = require("baseui/input");
var baseui_1 = require("baseui");
exports.Input = function (props) {
    var overrides = baseui_1.mergeOverrides({
        InputContainer: {
            style: exports.getInputContainerStyles
        },
        Input: {
            style: exports.getInputStyles
        }
    }, props.overrides);
    return react_1.default.createElement(input_1.Input, __assign({}, props, { overrides: overrides }));
};
exports.StatefulInput = function (props) {
    var overrides = baseui_1.mergeOverrides({
        InputContainer: {
            style: exports.getInputContainerStyles
        },
        Input: {
            style: exports.getInputStyles
        }
    }, props.overrides);
    return react_1.default.createElement(input_1.StatefulInput, __assign({}, props, { overrides: overrides }));
};
var input_2 = require("baseui/input");
exports.StatefulContainer = input_2.StatefulContainer;
exports.BaseInput = input_2.BaseInput;
exports.MaskedInput = input_2.MaskedInput;
exports.StyledRoot = input_2.StyledRoot;
exports.StyledInputEnhancer = input_2.StyledInputEnhancer;
exports.StyledStartEnhancer = input_2.StyledStartEnhancer;
exports.StyledEndEnhancer = input_2.StyledEndEnhancer;
exports.StyledInputContainer = input_2.StyledInputContainer;
exports.StyledInput = input_2.StyledInput;
exports.STATE_CHANGE_TYPE = input_2.STATE_CHANGE_TYPE;
exports.ADJOINED = input_2.ADJOINED;
exports.SIZE = input_2.SIZE;
exports.CUSTOM_INPUT_TYPE = input_2.CUSTOM_INPUT_TYPE;
exports.ENHANCER_POSITION = input_2.ENHANCER_POSITION;
exports.getInputContainerStyles = function (_a) {
    var $adjoined = _a.$adjoined, $isFocused = _a.$isFocused, $error = _a.$error, $disabled = _a.$disabled, $positive = _a.$positive, $size = _a.$size, $theme = _a.$theme;
    var styles = {
        backgroundColor: $theme.colors.spr["ui-01"],
        borderColor: $theme.colors.spr["field"],
        borderRadius: '0.2rem',
        color: $theme.colors.spr["text-01"],
    };
    if ($disabled) {
        styles.backgroundColor = $theme.colors.spr["ui-02"];
        styles.color = $theme.colors.spr["text-02"];
    }
    if ($isFocused) {
        styles.borderColor = $theme.colors.spr["focus-01"];
    }
    if ($error) {
        styles.borderColor = $theme.colors.spr["support-error"];
    }
    switch ($size) {
        case input_1.SIZE.default: {
        }
        case input_1.SIZE.compact: {
        }
        case input_1.SIZE.large: {
        }
        default: {
        }
    }
    return styles;
};
exports.getInputStyles = function (_a) {
    var $adjoined = _a.$adjoined, $isFocused = _a.$isFocused, $error = _a.$error, $disabled = _a.$disabled, $positive = _a.$positive, $size = _a.$size, $theme = _a.$theme;
    var styles = {
        lineHeight: '', paddingLeft: '', paddingRight: '', paddingTop: '', paddingBottom: '', fontSize: ''
    };
    switch ($size) {
        case input_1.SIZE.mini: {
            styles.lineHeight = '1.5rem';
            styles.paddingLeft = styles.paddingRight = '0.8rem';
            styles.paddingTop = '0.8rem';
            styles.paddingBottom = '0.8rem';
            styles.fontSize = '1.2rem';
            break;
        }
        case input_1.SIZE.compact: {
            styles.lineHeight = '1.6rem';
            styles.paddingLeft = styles.paddingRight = '0.8rem';
            styles.paddingTop = '0.8rem';
            styles.paddingBottom = '0.8rem';
            styles.fontSize = '1.2rem';
            break;
        }
        case input_1.SIZE.default: {
            styles.lineHeight = '1.8rem';
            styles.paddingLeft = styles.paddingRight = '1.2rem';
            styles.paddingTop = '1.2rem';
            styles.paddingBottom = '1.2rem';
            styles.fontSize = '1.3rem';
            break;
        }
        case input_1.SIZE.large: {
            styles.lineHeight = '2rem';
            styles.paddingLeft = styles.paddingRight = '2rem';
            styles.paddingTop = '1.6rem';
            styles.paddingBottom = '1.6rem';
            styles.fontSize = '1.4rem';
            break;
        }
    }
    return styles;
};
