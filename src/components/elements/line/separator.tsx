import { FC } from 'react';

interface ISeparatorProps {
    color?: string;
    className?: string;
}

export const Separator: FC<ISeparatorProps> = ({ color, className }) => {
    let outputClassName = '';
    const staticClassName = 'my-0 h-px border-t-0 bg-transparent opacity-25';
    let colorClassName =
        'bg-gradient-to-r from-transparent via-neutral-500 to-transparent dark:via-neutral-400';

    if (color) {
        colorClassName = color;
    }

    if (className) {
        outputClassName = className;
    } else {
        outputClassName = `${staticClassName} ${colorClassName}`;
    }

    return <hr className={outputClassName} />;
};
