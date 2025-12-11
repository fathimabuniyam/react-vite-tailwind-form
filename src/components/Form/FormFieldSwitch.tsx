import type { AllFormFields } from '../../types/form.types';
import FormCheckbox from './FormCheckbox';
import FormFileUpload from './FormFileUpload';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

type Props = {
  field: AllFormFields;
  formData: Record<string, any>;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
};

const FormFieldSwitch = ({ formData, field, onFieldChange, errors }: Props) => {
  if (field.type === 'checkbox') {
    return (
      <FormCheckbox
        key={field.id}
        field={field}
        value={formData[field.id] || false}
        error={errors[field.id]}
        onChange={(value) => onFieldChange(field.id, value)}
      />
    );
  }

  if (field.type === 'file') {
    return (
      <FormFileUpload
        key={field.id}
        field={field}
        value={(formData[field.id] as File[]) || []}
        onChange={(files) => onFieldChange(field.id, files)}
        error={errors[field.id]}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <FormSelect
        key={field.id}
        field={field}
        value={formData[field.id] || ''}
        onChange={(value) => onFieldChange(field.id, value)}
        error={errors[field.id]}
      />
    );
  }

  return (
    <FormInput
      key={field.id}
      field={field}
      value={formData[field.id] || ''}
      onChange={(value) => onFieldChange(field.id, value)}
      error={errors[field.id]}
    />
  );
};

export default FormFieldSwitch;
