var _a;
import { DarkTheme } from './dark-theme';
import { LightTheme } from './light-theme';
import { withResponsiveTheme } from './responsive-theme';
export var THEME_TYPES;
(function (THEME_TYPES) {
    THEME_TYPES["DARK"] = "DARK";
    THEME_TYPES["LIGHT"] = "LIGHT";
})(THEME_TYPES || (THEME_TYPES = {}));
export var THEME_TYPES_TO_THEME = (_a = {},
    _a[THEME_TYPES.DARK] = withResponsiveTheme(DarkTheme),
    _a[THEME_TYPES.LIGHT] = withResponsiveTheme(LightTheme),
    _a);
