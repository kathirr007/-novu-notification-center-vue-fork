export interface ISvgStopColor {
    stopColor?: string;
    stopColorOffset?: string;
}
export interface INotificationBellColors {
    unseenBadgeColor?: string | ISvgStopColor;
    unseenBadgeBackgroundColor?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    unseenCount?: number | undefined;
    bellButtonClass?: string | undefined;
    gradientDotClass?: string | undefined;
    colors: INotificationBellColors;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    unseenCount?: number | undefined;
    bellButtonClass?: string | undefined;
    gradientDotClass?: string | undefined;
    colors: INotificationBellColors;
}>>>, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
//# sourceMappingURL=BellButton.vue.d.ts.map