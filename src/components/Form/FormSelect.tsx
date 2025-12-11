import type { FormFieldSelect } from '../../types/form.types';
import FormLayout from './FormLayout';

type FormSelectProps = {
  field: FormFieldSelect;
  value: any;
  onChange: (value: any) => void;
  error?: string;
};

const FormSelect: React.FC<FormSelectProps> = ({
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

  return (
    <FormLayout
      id={field.id}
      label={field.label}
      error={error}
      required={field.required}
    >
      <select
        id={field.id}
        value={value || ''}
        onChange={handleChange}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        {field.options?.map((option: string) => (
          <option key={option} value={option}>
            {option || 'Select an option'}
          </option>
        ))}
      </select>
    </FormLayout>
  );
};

export default FormSelect;
