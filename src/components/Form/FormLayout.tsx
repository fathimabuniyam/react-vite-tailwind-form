import type { ReactNode } from 'react';
import type { BaseField } from '../../types/form.types';

type FormLayoutProps = {
  id: BaseField['id'];
  label: BaseField['label'];
  required: BaseField['required'];
  error?: string;
  children: ReactNode;
};

const FormLayout: React.FC<FormLayoutProps> = ({
  id,
  label,
  required,
  error,
  children,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormLayout;
