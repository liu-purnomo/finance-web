import { FC } from 'react';

interface ITextGradientProps {
    className?: string;
    text: string;
}
export const TextGradient: FC<ITextGradientProps> = ({ text, className }) => {
    const fixedClassName =
        className +
        ' inline-block bg-gradient-to-r  from-[#EF1262]  to-[#4361EE]  bg-clip-text font-bold text-transparent';

    return <span className={fixedClassName}>{text}</span>;
};
