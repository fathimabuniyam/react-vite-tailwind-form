import React from 'react';
import FormFieldSwitch from '../../components/Form/FormFieldSwitch';
import type { AllFormFields } from '../../types/form.types';
import { addUserTabsInitial } from './AddUser.helper';
import AddUserHeader from './AddUserHeader';

interface AddUserPurposeDocumentsProps {
  fields: AllFormFields[];
  formData: Record<string, any>;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
}

const AddUserPurposeDocuments: React.FC<AddUserPurposeDocumentsProps> = ({
  fields,
  formData,
  errors,
  onFieldChange,
}) => {
  const shouldShowField = (field: AllFormFields) => {
    if (!field.conditional) return true;

    const { field: conditionalField, value } = field.conditional;
    return formData[conditionalField] === value;
  };

  const renderField = (field: AllFormFields, index: number) => {
    if (!shouldShowField(field)) return null;

    return (
      <FormFieldSwitch
        key={index}
        field={field}
        formData={formData}
        errors={errors}
        onFieldChange={onFieldChange}
      />
    );
  };

  return (
    <div className="space-y-4">
      <AddUserHeader title={addUserTabsInitial[1]} />
      <div className="space-y-4">{fields.map(renderField)}</div>
    </div>
  );
};

export default AddUserPurposeDocuments;
