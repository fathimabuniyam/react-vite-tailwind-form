import React from 'react';
import type { FormFieldInput } from '../../types/form.types';
import FormLayout from './FormLayout';

interface FormInputProps {
  field: FormFieldInput;
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  field,
  value,
  onChange,
  error,
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    onChange(e.target.value);
  };

  const baseClasses =
    'w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500';
  const errorClasses = error ? 'border-red-500' : 'border-gray-300';

  const renderInput = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`${baseClasses} ${errorClasses}`}
            rows={4}
          />
        );

      default:
        return (
          <input
            type={field.type}
            id={field.id}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`${baseClasses} ${errorClasses}`}
          />
        );
    }
  };

  return (
    <FormLayout
      id={field.id}
      label={field.label}
      error={error}
      required={field.required}
    >
      {renderInput()}
    </FormLayout>
  );
};

export default FormInput;
