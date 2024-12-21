import { FC } from 'react';

interface DisableInputProps {
  label?: string;
  content?: string;
  className?: string;
}

const DisableInput: FC<DisableInputProps> = ({ label, content, className = 'form-input bg-gray-100 ' }) => {
  return (
    <>
      {label ? <label className="font-bold text-sm">{label}</label> : null}
      <div className={className}>{content}</div>
    </>
  );
};

export default DisableInput;
