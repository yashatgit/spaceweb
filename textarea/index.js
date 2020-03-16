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
var input_1 = require("../input");
var react_1 = __importDefault(require("react"));
var textarea_1 = require("baseui/textarea");
var baseui_1 = require("baseui");
exports.Textarea = function (props) {
    var overrides = baseui_1.mergeOverrides({
        InputContainer: {
            style: input_1.getInputContainerStyles
        },
        Input: {
            style: input_1.getInputStyles
        }
    }, props.overrides);
    return react_1.default.createElement(textarea_1.Textarea, __assign({}, props, { overrides: overrides }));
};
exports.StatefulTextarea = function (props) {
    var overrides = baseui_1.mergeOverrides({
        InputContainer: {
            style: input_1.getInputContainerStyles
        },
        Input: {
            style: input_1.getInputStyles
        }
    }, props.overrides);
    return react_1.default.createElement(textarea_1.StatefulTextarea, __assign({}, props, { overrides: overrides }));
};
var textarea_2 = require("baseui/textarea");
exports.StatefulContainer = textarea_2.StatefulContainer;
exports.StyledTextareaContainer = textarea_2.StyledTextareaContainer;
exports.StyledTextarea = textarea_2.StyledTextarea;
exports.STATE_CHANGE_TYPE = textarea_2.STATE_CHANGE_TYPE;
exports.SIZE = textarea_2.SIZE;
