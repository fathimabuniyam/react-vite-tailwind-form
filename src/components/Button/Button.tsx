import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'secondary' | 'disabled' | 'error';
  children: ReactNode;
};

const Button = ({ color, children, disabled, className, ...props }: Props) => {
  const colors = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      'bg-white border border-gray-300 text-blue-600 hover:bg-gray-200',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
    error: 'bg-white border border-red-300 text-red-600 hover:bg-gray-200',
  };

  return (
    <button
      className={`${disabled ? colors['disabled'] : colors[color]} px-6 py-2 rounded-md ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
