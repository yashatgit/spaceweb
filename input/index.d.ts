/// <reference types="react" />
export declare const Input: (props: any) => JSX.Element;
export declare const StatefulInput: (props: any) => JSX.Element;
export { StatefulContainer, BaseInput, MaskedInput, StyledRoot, StyledInputEnhancer, StyledStartEnhancer, StyledEndEnhancer, StyledInputContainer, StyledInput, STATE_CHANGE_TYPE, ADJOINED, SIZE, CUSTOM_INPUT_TYPE, ENHANCER_POSITION, BaseInputOverrides, BaseInputProps, State, InputOverrides, SharedProps, InputProps, InternalState, MaskedInputProps, StatefulContainerProps, StatefulInputProps } from 'baseui/input';
export declare const getInputContainerStyles: ({ $adjoined, $isFocused, $error, $disabled, $positive, $size, $theme }: {
    $adjoined: any;
    $isFocused: any;
    $error: any;
    $disabled: any;
    $positive: any;
    $size: any;
    $theme: any;
}) => {
    backgroundColor: any;
    borderColor: any;
    borderRadius: string;
    color: any;
};
export declare const getInputStyles: ({ $adjoined, $isFocused, $error, $disabled, $positive, $size, $theme }: {
    $adjoined: any;
    $isFocused: any;
    $error: any;
    $disabled: any;
    $positive: any;
    $size: any;
    $theme: any;
}) => {
    lineHeight: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    fontSize: string;
};
