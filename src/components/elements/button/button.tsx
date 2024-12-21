'use-client';
import { IconLoader } from '@/components/icons';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
  className?: string;
  uppercase?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  width?: string;
  color?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  type,
  label = 'Submit',
  width,
  icon,
  loading,
  uppercase,
  onClick,
  color,
  disabled,
  className = 'btn',
}) => {
  let widthClassName = 'w-full';
  let colorClassName = 'btn-outline-main';
  // let colorClassName = "btn-gradient border-0 shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]";

  if (width) {
    widthClassName = width;
  }

  if (color) {
    colorClassName = `${color}`;
  }

  className += ` ${widthClassName}`;
  className += ` ${colorClassName}`;

  if (uppercase) {
    className += ' uppercase';
  }
  if (loading) {
    return (
      <button type="button" disabled className={className}>
        <IconLoader className="inline-block shrink-0 animate-[spin_2s_linear_infinite] align-middle ltr:mr-2 rtl:ml-2" />
        Loading
      </button>
    );
  } else {
    return (
      <button
        disabled={disabled}
        type={type || 'submit'}
        className={className}
        onClick={disabled ? () => {} : onClick}
      >
        {icon}
        {label}
      </button>
    );
  }
};
