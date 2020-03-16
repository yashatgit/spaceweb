import * as React from 'react';
import { BaseProvider as _BaseProvider } from 'baseui';
import { THEME_TYPES_TO_THEME } from '../themes';
export var BaseProvider = function (props) {
    var children = props.children, themeType = props.themeType;
    return (React.createElement(_BaseProvider, { theme: THEME_TYPES_TO_THEME[themeType] }, children));
};
