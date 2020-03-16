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
// @ts-ignore
import SprLightTheme from '@sprinklr/style-dictionary/lib/default/theme';
import { createTheme, lightThemePrimitives, LightTheme as BaseLightTheme } from 'baseui';
import { sharedPrimitives } from './shared';
var primitives = __assign(__assign({}, lightThemePrimitives), sharedPrimitives);
var overrides = {
    colors: { spr: SprLightTheme.spr },
};
var theme = createTheme(primitives, overrides);
export var LightTheme = __assign(__assign({ name: 'light-theme' }, theme), { colors: __assign(__assign({}, theme.colors), BaseLightTheme.colors) });
