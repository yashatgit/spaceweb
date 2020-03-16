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
var checkbox_1 = require("baseui/checkbox");
var baseui_1 = require("baseui");
var styles_1 = require("baseui/styles");
var makeOverrides = function (props) {
    var overrides = baseui_1.mergeOverrides({
        Checkmark: {
            style: getCheckmarkOverrides
        },
        Label: {
            style: getLabelOverrides
        }
    }, props.overrides);
    return __assign(__assign({}, props), { overrides: overrides });
};
exports.Checkbox = function (props) {
    return react_1.default.createElement(checkbox_1.Checkbox, __assign({}, makeOverrides(props)));
};
exports.StatefulCheckbox = function (props) {
    return react_1.default.createElement(checkbox_1.StatefulCheckbox, __assign({}, makeOverrides(props)));
};
var checkbox_2 = require("baseui/checkbox");
exports.StatefulContainer = checkbox_2.StatefulContainer;
exports.StyledRoot = checkbox_2.StyledRoot;
exports.StyledCheckmark = checkbox_2.StyledCheckmark;
exports.StyledLabel = checkbox_2.StyledLabel;
exports.StyledInput = checkbox_2.StyledInput;
exports.StyledToggle = checkbox_2.StyledToggle;
exports.StyledToggleInner = checkbox_2.StyledToggleInner;
exports.StyledToggleTrack = checkbox_2.StyledToggleTrack;
exports.STATE_TYPE = checkbox_2.STATE_TYPE;
exports.STYLE_TYPE = checkbox_2.STYLE_TYPE;
exports.LABEL_PLACEMENT = checkbox_2.LABEL_PLACEMENT;
var getLabelOverrides = function (props) {
    return { color: props.$disabled ? props.$theme.colors.spr['text-02'] : props.$theme.colors.spr['text-01'] };
};
var getCheckmarkOverrides = function (props) {
    var styles = {
        backgroundColor: getBackgroundColor(props),
        borderColor: getBorderColor(props),
        borderWidth: '2px',
        height: '18px',
        width: '18px'
    };
    return styles;
};
function getBorderColor(props) {
    var $disabled = props.$disabled, $checked = props.$checked, $isError = props.$isError, $isIndeterminate = props.$isIndeterminate, $theme = props.$theme, $isFocusVisible = props.$isFocusVisible, $isHovered = props.$isHovered;
    var colors = $theme.colors;
    if ($disabled) {
        if ($checked || $isIndeterminate) {
            // return colors.spr['focus-01']
            return 'transparent';
        }
        else {
            if ($isError)
                return styles_1.hexToRgb(colors.spr['support-error'], '0.5');
            return colors.spr['icon-disable'];
        }
    }
    else if ($checked || $isIndeterminate) {
        return 'transparent';
    }
    else if ($isError) {
        return colors.spr['support-error'];
    }
    else if ($isHovered) {
        return colors.spr['icon-hover'];
    }
    else {
        return colors.spr['icon-03'];
    }
}
function getBackgroundColor(props) {
    var $disabled = props.$disabled, $checked = props.$checked, $isIndeterminate = props.$isIndeterminate, $isError = props.$isError, $isHovered = props.$isHovered, $isActive = props.$isActive, $theme = props.$theme, $checkmarkType = props.$checkmarkType;
    var isToggle = $checkmarkType === checkbox_1.STYLE_TYPE.toggle;
    var colors = $theme.colors;
    if ($disabled) {
        if ($isError && ($isIndeterminate || $checked)) {
            return styles_1.hexToRgb(colors.spr['support-error'], '0.5');
        }
        if ($checked || $isIndeterminate) {
            // return colors.spr['focus-01']
            return styles_1.hexToRgb(colors.spr['focus-01'], '0.5');
        }
        else {
            return 'transparent';
        }
    }
    else if ($isError && ($isIndeterminate || $checked)) {
        return colors.spr['support-error'];
        // if ($isActive) {
        //   return colors.tickFillErrorSelectedHoverActive;
        // } else if ($isHovered) {
        //   return colors.tickFillErrorSelectedHover;
        // } else {
        //   return colors.tickFillErrorSelected;
        // }
    }
    else if ($isError) {
        return 'transparent';
        // if ($isActive) {
        //   return colors.tickFillErrorHoverActive;
        // } else if ($isHovered) {
        //   return colors.tickFillErrorHover;
        // } else {
        //   return colors.tickFillError;
        // }
    }
    else if ($isIndeterminate || $checked) {
        return colors.spr['focus-01'];
        // if ($isActive) {
        //   return colors.tickFillSelectedHoverActive;
        // } else if ($isHovered) {
        //   return colors.tickFillSelectedHover;
        // } else {
        //   return colors.tickFillSelected;
        // }
    }
    else {
        return 'transparent';
        // if ($isActive) {
        //   return isToggle ? colors.sliderTrackFillActive : colors.tickFillActive;
        // } else if ($isHovered) {
        //   return isToggle ? colors.sliderTrackFillHover : colors.tickFillHover;
        // } else {
        //   return isToggle ? colors.sliderTrackFill : colors.tickFill;
        // }
    }
}
