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
import { getInputContainerStyles, getInputStyles } from '../input';
import React from 'react';
import { Textarea as _Textarea, StatefulTextarea as _StatefulTextarea } from 'baseui/textarea';
import { mergeOverrides } from 'baseui';
export var Textarea = function (props) {
    var overrides = mergeOverrides({
        InputContainer: {
            style: getInputContainerStyles
        },
        Input: {
            style: getInputStyles
        }
    }, props.overrides);
    return React.createElement(_Textarea, __assign({}, props, { overrides: overrides }));
};
export var StatefulTextarea = function (props) {
    var overrides = mergeOverrides({
        InputContainer: {
            style: getInputContainerStyles
        },
        Input: {
            style: getInputStyles
        }
    }, props.overrides);
    return React.createElement(_StatefulTextarea, __assign({}, props, { overrides: overrides }));
};
export { StatefulContainer, StyledTextareaContainer, StyledTextarea, STATE_CHANGE_TYPE, SIZE } from 'baseui/textarea';
