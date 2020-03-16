import { DarkTheme as BaseDarkTheme } from 'baseui';
import SprTheme from '@sprinklr/style-dictionary/lib/types/theme';
export declare type ThemeColors = typeof BaseDarkTheme.colors & {
    spr: SprTheme['spr'];
};
