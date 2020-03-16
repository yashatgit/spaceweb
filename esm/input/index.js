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
import { Input as _Input, StatefulInput as _StatefulInput, SIZE } from 'baseui/input';
import { mergeOverrides } from 'baseui';
export var Input = function (props) {
    var overrides = mergeOverrides({
        InputContainer: {
            style: getInputContainerStyles
        },
        Input: {
            style: getInputStyles
        }
    }, props.overrides);
    return React.createElement(_Input, __assign({}, props, { overrides: overrides }));
};
export var StatefulInput = function (props) {
    var overrides = mergeOverrides({
        InputContainer: {
            style: getInputContainerStyles
        },
        Input: {
            style: getInputStyles
        }
    }, props.overrides);
    return React.createElement(_StatefulInput, __assign({}, props, { overrides: overrides }));
};
export { StatefulContainer, BaseInput, MaskedInput, StyledRoot, StyledInputEnhancer, StyledStartEnhancer, StyledEndEnhancer, StyledInputContainer, StyledInput, STATE_CHANGE_TYPE, ADJOINED, SIZE, CUSTOM_INPUT_TYPE, ENHANCER_POSITION } from 'baseui/input';
export var getInputContainerStyles = function (_a) {
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
        case SIZE.default: {
        }
        case SIZE.compact: {
        }
        case SIZE.large: {
        }
        default: {
        }
    }
    return styles;
};
export var getInputStyles = function (_a) {
    var $adjoined = _a.$adjoined, $isFocused = _a.$isFocused, $error = _a.$error, $disabled = _a.$disabled, $positive = _a.$positive, $size = _a.$size, $theme = _a.$theme;
    var styles = {
        lineHeight: '', paddingLeft: '', paddingRight: '', paddingTop: '', paddingBottom: '', fontSize: ''
    };
    switch ($size) {
        case SIZE.mini: {
            styles.lineHeight = '1.5rem';
            styles.paddingLeft = styles.paddingRight = '0.8rem';
            styles.paddingTop = '0.8rem';
            styles.paddingBottom = '0.8rem';
            styles.fontSize = '1.2rem';
            break;
        }
        case SIZE.compact: {
            styles.lineHeight = '1.6rem';
            styles.paddingLeft = styles.paddingRight = '0.8rem';
            styles.paddingTop = '0.8rem';
            styles.paddingBottom = '0.8rem';
            styles.fontSize = '1.2rem';
            break;
        }
        case SIZE.default: {
            styles.lineHeight = '1.8rem';
            styles.paddingLeft = styles.paddingRight = '1.2rem';
            styles.paddingTop = '1.2rem';
            styles.paddingBottom = '1.2rem';
            styles.fontSize = '1.3rem';
            break;
        }
        case SIZE.large: {
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
