import React from 'react';
import FormFieldSwitch from '../../components/Form/FormFieldSwitch';
import type { AllFormFields } from '../../types/form.types';
import { addUserTabsInitial } from './AddUser.helper';
import AddUserHeader from './AddUserHeader';

interface AddUserAdditionalInfoProps {
  fields: AllFormFields[];
  formData: Record<string, any>;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
}

const AddUserAdditionalInfo: React.FC<AddUserAdditionalInfoProps> = ({
  fields,
  formData,
  errors,
  onFieldChange,
}) => {
  return (
    <div className="space-y-4">
      <AddUserHeader title={addUserTabsInitial[2]} />
      <div className="space-y-4">
        {fields.map((field: AllFormFields, index: number) => (
          <FormFieldSwitch
            key={index}
            field={field}
            formData={formData}
            errors={errors}
            onFieldChange={onFieldChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AddUserAdditionalInfo;
