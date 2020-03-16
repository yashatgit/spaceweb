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
import { Tooltip as BaseTooltip } from 'baseui/tooltip';
import { mergeOverrides } from 'baseui';
var Tooltip = function (props) {
    var overrides = mergeOverrides({
        Arrow: { style: getArrowStyle },
        Body: { style: getBodyStyle },
        Inner: { style: getInnerStyle },
    }, props.overrides);
    return React.createElement(BaseTooltip, __assign({}, props, { overrides: overrides }));
};
function getArrowStyle(_a) {
    var $theme = _a.$theme;
    return { backgroundColor: $theme.colors.spr['tooltip-01'] };
}
function getBodyStyle(_a) {
    var $theme = _a.$theme;
    return { backgroundColor: 'transperent', boxShadow: 'none' };
}
function getInnerStyle(_a) {
    var $theme = _a.$theme;
    return {
        backgroundColor: $theme.colors.spr['tooltip-01'],
        color: $theme.colors.spr['text-06'],
        borderTopLeftRadius: '6px',
        borderTopRightRadius: '6px',
        borderBottomRightRadius: '6px',
        borderBottomLeftRadius: '6px',
        borderColor: $theme.colors.spr['tooltip-border'],
        fontSize: '11px',
        paddingTop: $theme.sizing.scale100,
        paddingBottom: $theme.sizing.scale100,
        paddingLeft: $theme.sizing.scale300,
        paddingRight: $theme.sizing.scale300,
    };
}
export default Tooltip;
