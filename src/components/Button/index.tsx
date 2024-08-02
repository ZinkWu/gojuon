import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  onClick: () => void
  className?: string
  disabled?: boolean
}>

const Button: React.FC<Props> = ({ onClick, className = '', disabled = false, children }) => {
  return <button
    disabled={disabled}
    className={`p-5 text-2xl bg-green-600 text-white border-0 rounded-xl cursor-pointer transition ${className}`}
    onClick={onClick}
  >{children}</button>;
};

export default Button;
