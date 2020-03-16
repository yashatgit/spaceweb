/// <reference types="@sprinklr/types" />
export declare enum THEME_TYPES {
    DARK = "DARK",
    LIGHT = "LIGHT"
}
export declare const THEME_TYPES_TO_THEME: {
    [THEME_TYPES.DARK]: import("baseui/theme").Theme & {
        colors: import("./types").ThemeColors;
    } & {
        breakpoints: {
            small: number;
            medium: number;
            large: number;
        };
        mediaQuery: Record<"large" | "medium" | "small", string>;
    };
    [THEME_TYPES.LIGHT]: import("baseui/theme").Theme & {
        colors: import("./types").ThemeColors;
    } & {
        breakpoints: {
            small: number;
            medium: number;
            large: number;
        };
        mediaQuery: Record<"large" | "medium" | "small", string>;
    };
};
export declare type ThemeT = Spr.ValueOf<typeof THEME_TYPES_TO_THEME>;
