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
var button_group_1 = require("baseui/button-group");
var baseui_1 = require("baseui");
var ButtonGroup = function (props) {
    var overrides = baseui_1.mergeOverrides({}, props.overrides);
    return react_1.default.createElement(button_group_1.ButtonGroup, __assign({}, props, { overrides: overrides }));
};
exports.ButtonGroup = ButtonGroup;
var StatefulButtonGroup = function (props) {
    var overrides = baseui_1.mergeOverrides({}, props.overrides);
    return react_1.default.createElement(button_group_1.StatefulButtonGroup, __assign({}, props, { overrides: overrides }));
};
exports.StatefulButtonGroup = StatefulButtonGroup;
var button_group_2 = require("baseui/button-group");
exports.StatefulContainer = button_group_2.StatefulContainer;
exports.MODE = button_group_2.MODE;
exports.STATE_CHANGE_TYPE = button_group_2.STATE_CHANGE_TYPE;
exports.StyledRoot = button_group_2.StyledRoot;
