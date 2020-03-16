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
import SprDarkTheme from '@sprinklr/style-dictionary/lib/dark/theme';
import { createTheme, darkThemePrimitives, DarkTheme as BaseDarkTheme } from 'baseui';
import { sharedPrimitives } from './shared';
var primitives = __assign(__assign({}, darkThemePrimitives), sharedPrimitives);
var overrides = {
    colors: { spr: SprDarkTheme.spr },
};
var theme = createTheme(primitives, overrides);
export var DarkTheme = __assign(__assign({ name: 'dark-theme' }, theme), { colors: __assign(__assign({}, theme.colors), BaseDarkTheme.colors) });
