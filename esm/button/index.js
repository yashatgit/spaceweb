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
import { Button as _Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { mergeOverrides } from 'baseui';
var Button = function (props) {
    var overrides = mergeOverrides({
        BaseButton: {
            style: function (_a) {
                var $theme = _a.$theme, $size = _a.$size, $shape = _a.$shape, $kind = _a.$kind, $isLoading = _a.$isLoading, $isSelected = _a.$isSelected, $disabled = _a.$disabled;
                return __assign(__assign(__assign({ cursor: $disabled ? 'not-allowed' : 'pointer', opacity: $disabled ? '0.6' : '1', lineHeight: '1', borderWidth: '1px', borderStyle: 'solid' }, getFontStyles({ $theme: $theme, $size: $size })), getPaddingStyles({ $theme: $theme, $size: $size, $shape: $shape })), getKindStyles({ $theme: $theme, $kind: $kind, $isLoading: $isLoading, $isSelected: $isSelected, $disabled: $disabled }));
            }
        }
    }, props.overrides);
    return React.createElement(_Button, __assign({}, props, { overrides: overrides }));
};
export { Button };
export { KIND, SIZE, SHAPE, StyledStartEnhancer, StyledEndEnhancer, StyledLoadingSpinner, StyledLoadingSpinnerContainer, } from 'baseui/button';
function getFontStyles(_a) {
    var $theme = _a.$theme, $size = _a.$size;
    switch ($size) {
        case SIZE.mini:
            return $theme.typography.font150;
        case SIZE.compact:
            return { fontSize: '1.2rem' };
        case SIZE.large:
            return { fontSize: '1.3rem' };
        default:
            return { fontSize: '1.2rem' };
    }
}
function getPaddingStyles(_a) {
    var $theme = _a.$theme, $size = _a.$size, $shape = _a.$shape;
    var iconShape = $shape === SHAPE.square || $shape === SHAPE.round;
    switch ($size) {
        case SIZE.mini:
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
        case SIZE.compact:
            return {
                paddingTop: '0.55rem',
                paddingBottom: '0.55rem',
                paddingLeft: iconShape ? '1.2rem' : '1.2rem',
                paddingRight: iconShape ? '1.2rem' : '1.2rem',
            };
        case SIZE.large:
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
        case KIND.primary:
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
        case KIND.secondary:
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
        case KIND.tertiary:
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
        case KIND.minimal:
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
