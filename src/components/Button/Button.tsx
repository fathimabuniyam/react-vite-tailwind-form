import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: 'primary' | 'secondary' | 'disabled';
  children: ReactNode;
};

const Button = ({ color, children, disabled, className, ...props }: Props) => {
  const colors = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-blue-500 text-white',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
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
