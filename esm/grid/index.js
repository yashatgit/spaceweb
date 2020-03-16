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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React from 'react';
import { styled } from 'baseui/styles';
var breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};
var GridChildWrapper = styled('div', function (_a) {
    var _b;
    var spacing = _a.spacing, spacings = _a.spacings, placement = _a.placement, placements = _a.placements, index = _a.index, direction = _a.direction;
    var wrapperStyles = {
        flexGrow: 0, boxSizing: 'border-box'
    };
    if (Array.isArray(placement)) {
        var placementMeasure = placement[index % placement.length];
        wrapperStyles[direction === 'row' ? 'maxWidth' : 'maxHeight'] = 100 * placementMeasure / 12 + "%";
        wrapperStyles.flexBasis = 100 * placementMeasure / 12 + "%";
    }
    if (Object.values(placements).every(Array.isArray)) {
        for (var key in placements) {
            var placement_1 = placements[key];
            var placementMeasure = placement_1[index % placement_1.length];
            wrapperStyles["@media screen and (min-width:" + breakpoints[key] + "px)"] = (_b = {},
                _b[direction === 'row' ? 'maxWidth' : 'maxHeight'] = 100 * placementMeasure / 12 + "%",
                _b.flexBasis = 100 * placementMeasure / 12 + "%",
                _b);
        }
    }
    if (Array.isArray(spacing)) {
        wrapperStyles.paddingTop = wrapperStyles.paddingBottom = spacing[0] + "px";
        wrapperStyles.paddingRight = wrapperStyles.paddingLeft = spacing[1] + "px";
    }
    if (Object.values(spacings).every(Array.isArray)) {
        for (var key in spacings) {
            var _c = __read(spacings[key], 2), x = _c[0], y = _c[1];
            var mediaQueryKey = "@media screen and (min-width:" + breakpoints[key] + "px)";
            wrapperStyles[mediaQueryKey] = __assign(__assign({}, wrapperStyles[mediaQueryKey] || {}), { paddingTop: x + "px", paddingBottom: x + "px", paddingRight: y + "px", paddingLeft: y + "px" });
        }
    }
    return wrapperStyles;
});
export var Grid = function (props) {
    var children = props.children, _a = props.component, Component = _a === void 0 ? 'div' : _a, style = props.style, className = props.className, spacing = props.spacing, _b = props.spacings, spacings = _b === void 0 ? {} : _b, placement = props.placement, _c = props.placements, placements = _c === void 0 ? {} : _c, _d = props.center, center = _d === void 0 ? false : _d, _e = props.alignItems, alignItems = _e === void 0 ? 'stretch' : _e, _f = props.justifyContent, justifyContent = _f === void 0 ? 'flex-start' : _f, _g = props.direction, direction = _g === void 0 ? 'row' : _g, _h = props.wrap, wrap = _h === void 0 ? 'wrap' : _h;
    return (React.createElement(Component, { className: className, style: __assign({ display: 'flex', boxSizing: 'border-box', flexDirection: direction, flexWrap: wrap, justifyContent: center ? 'center' : justifyContent, alignItems: center ? 'center' : alignItems }, style) }, React.Children.toArray(children).map(function (child, index) {
        return React.createElement(GridChildWrapper, __assign({}, { index: index, spacing: spacing, spacings: spacings, placement: placement, placements: placements, direction: direction }), child);
    })));
};
export var TestItem = function (_a) {
    var t = _a.t, _b = _a.style, style = _b === void 0 ? {} : _b;
    return React.createElement(Grid, { center: true, style: __assign({ height: '50px', width: '100%', border: '1px solid blue' }, style) }, t);
};
