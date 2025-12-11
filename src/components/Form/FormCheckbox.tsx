import React from 'react';
import type { FormFieldInput } from '../../types/form.types';

interface FormCheckboxProps {
  field: FormFieldInput;
  value: boolean;
  error?: string;
  onChange: (value: boolean) => void;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  field,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="flex items-center space-x-2 text-sm font-medium">
        <input
          type="checkbox"
          checked={value || false}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300"
        />
        <span>{field.label}</span>
      </label>
      {error && <p className="text-red-600 text-xs">{error}</p>}
    </div>
  );
};

export default FormCheckbox;
