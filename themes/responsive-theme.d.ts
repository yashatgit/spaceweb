export declare const withResponsiveTheme: <T extends object>(theme: T) => T & {
    breakpoints: {
        small: number;
        medium: number;
        large: number;
    };
    mediaQuery: Record<"large" | "medium" | "small", string>;
};
