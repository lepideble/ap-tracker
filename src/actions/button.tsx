import { type HTMLAttributes } from 'react';
import { type Action as HandlerAction } from './getHandler';
import { default as getProps, type Action as PropsAction } from './getProps';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
    action: PropsAction;
    onSuccess?: HandlerAction;
}

export function Button({ action, onSuccess, ...props }: ButtonProps) {
    const [ActionComponent, actionProps] = getProps(action, { onSuccess });

    return <ActionComponent {...props} {...actionProps} />;
}
