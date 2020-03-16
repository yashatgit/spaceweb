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
import React from 'react';
import { ButtonGroup as _ButtonGroup, StatefulButtonGroup as _StatefulButtonGroup } from 'baseui/button-group';
import { mergeOverrides } from 'baseui';
var ButtonGroup = function (props) {
    var overrides = mergeOverrides({}, props.overrides);
    return React.createElement(_ButtonGroup, __assign({}, props, { overrides: overrides }));
};
var StatefulButtonGroup = function (props) {
    var overrides = mergeOverrides({}, props.overrides);
    return React.createElement(_StatefulButtonGroup, __assign({}, props, { overrides: overrides }));
};
export { ButtonGroup, StatefulButtonGroup };
export { StatefulContainer, MODE, STATE_CHANGE_TYPE, StyledRoot } from 'baseui/button-group';
