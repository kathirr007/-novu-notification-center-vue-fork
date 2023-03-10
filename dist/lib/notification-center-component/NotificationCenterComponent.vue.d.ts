import type { NotificationCenterContentComponentProps } from '@novu/notification-center';
export type FloatingPlacement = 'end' | 'start';
export type FloatingSide = 'top' | 'right' | 'bottom' | 'left' | 'auto';
export type FloatingPosition = FloatingSide | `${FloatingSide}-${FloatingPlacement}`;
export interface INotificationCenterComponentProps {
    backendUrl?: NotificationCenterContentComponentProps['backendUrl'];
    socketUrl?: NotificationCenterContentComponentProps['socketUrl'];
    subscriberId?: NotificationCenterContentComponentProps['subscriberId'];
    applicationIdentifier: NotificationCenterContentComponentProps['applicationIdentifier'];
    subscriberHash?: NotificationCenterContentComponentProps['subscriberHash'];
    stores?: NotificationCenterContentComponentProps['stores'];
    tabs?: NotificationCenterContentComponentProps['tabs'];
    showUserPreferences?: NotificationCenterContentComponentProps['showUserPreferences'];
    allowedNotificationActions?: NotificationCenterContentComponentProps['allowedNotificationActions'];
    popover?: {
        offset?: number;
        position?: FloatingPosition;
    };
    theme?: NotificationCenterContentComponentProps['theme'];
    styles?: NotificationCenterContentComponentProps['styles'];
    colorScheme?: NotificationCenterContentComponentProps['colorScheme'];
    i18n?: NotificationCenterContentComponentProps['i18n'];
    sessionLoaded?: NotificationCenterContentComponentProps['sessionLoaded'];
    notificationClicked?: NotificationCenterContentComponentProps['notificationClicked'];
    unseenCountChanged?: NotificationCenterContentComponentProps['unseenCountChanged'];
    actionClicked?: NotificationCenterContentComponentProps['actionClicked'];
    tabClicked?: NotificationCenterContentComponentProps['tabClicked'];
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<INotificationCenterComponentProps>, {
    colorScheme: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<INotificationCenterComponentProps>, {
    colorScheme: string;
}>>>, {
    colorScheme: any;
}>, {
    default: (_: number & {
        unseenCount: number | undefined;
    }) => any;
}>;
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
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NotificationCenterComponent.vue.d.ts.map