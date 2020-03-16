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
var button_1 = require("baseui/button");
var baseui_1 = require("baseui");
var Button = function (props) {
    var overrides = baseui_1.mergeOverrides({
        BaseButton: {
            style: function (_a) {
                var $theme = _a.$theme, $size = _a.$size, $shape = _a.$shape, $kind = _a.$kind, $isLoading = _a.$isLoading, $isSelected = _a.$isSelected, $disabled = _a.$disabled;
                return __assign(__assign(__assign({ cursor: $disabled ? 'not-allowed' : 'pointer', opacity: $disabled ? '0.6' : '1', lineHeight: '1', borderWidth: '1px', borderStyle: 'solid' }, getFontStyles({ $theme: $theme, $size: $size })), getPaddingStyles({ $theme: $theme, $size: $size, $shape: $shape })), getKindStyles({ $theme: $theme, $kind: $kind, $isLoading: $isLoading, $isSelected: $isSelected, $disabled: $disabled }));
            }
        }
    }, props.overrides);
    return react_1.default.createElement(button_1.Button, __assign({}, props, { overrides: overrides }));
};
exports.Button = Button;
var button_2 = require("baseui/button");
exports.KIND = button_2.KIND;
exports.SIZE = button_2.SIZE;
exports.SHAPE = button_2.SHAPE;
exports.StyledStartEnhancer = button_2.StyledStartEnhancer;
exports.StyledEndEnhancer = button_2.StyledEndEnhancer;
exports.StyledLoadingSpinner = button_2.StyledLoadingSpinner;
exports.StyledLoadingSpinnerContainer = button_2.StyledLoadingSpinnerContainer;
function getFontStyles(_a) {
    var $theme = _a.$theme, $size = _a.$size;
    switch ($size) {
        case button_1.SIZE.mini:
            return $theme.typography.font150;
        case button_1.SIZE.compact:
            return { fontSize: '1.2rem' };
        case button_1.SIZE.large:
            return { fontSize: '1.3rem' };
        default:
            return { fontSize: '1.2rem' };
    }
}
function getPaddingStyles(_a) {
    var $theme = _a.$theme, $size = _a.$size, $shape = _a.$shape;
    var iconShape = $shape === button_1.SHAPE.square || $shape === button_1.SHAPE.round;
    switch ($size) {
        case button_1.SIZE.mini:
            return {
                paddingTop: $theme.sizing.scale200,
                paddingBottom: $theme.sizing.scale200,
                paddingLeft: iconShape
                    ? $theme.sizing.scale200
                    : $theme.sizing.scale300,
                paddingRight: iconShape
                    ? $theme.sizing.scale200
                    : $theme.sizing.scale300,
            };
        case button_1.SIZE.compact:
            return {
                paddingTop: '0.55rem',
                paddingBottom: '0.55rem',
                paddingLeft: iconShape ? '1.2rem' : '1.2rem',
                paddingRight: iconShape ? '1.2rem' : '1.2rem',
            };
        case button_1.SIZE.large:
            return {
                paddingTop: '0.9rem',
                paddingBottom: '0.9rem',
                paddingLeft: iconShape ? '1.6rem' : '1.6rem',
                paddingRight: iconShape ? '1.6rem' : '1.6rem',
            };
        default:
            return {
                paddingTop: '0.55rem',
                paddingBottom: '0.55rem',
                paddingLeft: iconShape ? '1.2rem' : '1.2rem',
                paddingRight: iconShape ? '1.2rem' : '1.2rem',
            };
    }
}
function getKindStyles(_a) {
    var $theme = _a.$theme, $isLoading = _a.$isLoading, $isSelected = _a.$isSelected, $kind = _a.$kind, $disabled = _a.$disabled;
    switch ($kind) {
        case button_1.KIND.primary:
            if ($disabled) {
                return {
                    ':disabled': {
                        color: $theme.colors.spr['text-05'],
                        backgroundColor: $theme.colors.spr['interactive-01'],
                        borderColor: $theme.colors.spr['interactive-01']
                    }
                };
            }
            return {
                color: $theme.colors.spr['text-05'],
                backgroundColor: $isSelected ? $theme.colors.spr['interactive-focus'] : $theme.colors.spr['interactive-01'],
                borderColor: $theme.colors.spr['interactive-01'],
                ':hover': {
                    backgroundColor: $theme.colors.spr['interactive-hover'],
                    borderColor: $theme.colors.spr['interactive-hover'],
                },
                ':focus': {
                    backgroundColor: $theme.colors.spr['interactive-focus'],
                    borderColor: $theme.colors.spr['interactive-focus'],
                },
                ':active': {
                    backgroundColor: $theme.colors.spr['interactive-focus'],
                    borderColor: $theme.colors.spr['interactive-focus'],
                },
            };
        case button_1.KIND.secondary:
            if ($disabled) {
                return {
                    ':disabled': {
                        color: $theme.colors.spr['text-02'],
                        backgroundColor: $theme.colors.spr['ui-01'],
                        borderColor: $theme.colors.spr['interactive-02'],
                    }
                };
            }
            return {
                color: $theme.colors.spr['text-02'],
                backgroundColor: $isSelected ? $theme.colors.spr['ui-focus'] : $theme.colors.spr['ui-01'],
                borderColor: $theme.colors.spr['interactive-02'],
                ':hover': {
                    backgroundColor: $theme.colors.spr['ui-hover'],
                },
                ':focus': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
                ':active': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
            };
        case button_1.KIND.tertiary:
            if ($disabled) {
                return {
                    ':disabled': {
                        color: $theme.colors.spr['text-04'],
                        backgroundColor: $theme.colors.spr['ui-01'],
                        borderColor: $theme.colors.spr['interactive-01'],
                    }
                };
            }
            return {
                color: $theme.colors.spr['text-04'],
                backgroundColor: $isSelected ? $theme.colors.spr['ui-focus'] : $theme.colors.spr['ui-01'],
                borderColor: $theme.colors.spr['interactive-01'],
                ':hover': {
                    backgroundColor: $theme.colors.spr['ui-hover'],
                },
                ':focus': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
                ':active': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
            };
        case button_1.KIND.minimal:
            if ($disabled) {
                return {
                    ':disabled': {
                        color: $theme.colors.spr['text-04'],
                        backgroundColor: $theme.colors.spr['ui-01'],
                        borderColor: $theme.colors.spr['interactive-01'],
                    }
                };
            }
            return {
                color: $theme.colors.spr['text-04'],
                backgroundColor: $isSelected ? $theme.colors.spr['ui-focus'] : $theme.colors.spr['ui-01'],
                borderColor: $theme.colors.spr['interactive-01'],
                ':hover': {
                    backgroundColor: $theme.colors.spr['ui-hover'],
                },
                ':focus': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
                ':active': {
                    backgroundColor: $theme.colors.spr['ui-focus'],
                },
            };
        default:
            return {};
    }
}
