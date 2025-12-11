import React from 'react';
import FormFieldSwitch from '../../components/Form/FormFieldSwitch';
import type { AllFormFields } from '../../types/form.types';
import { addUserTabsInitial } from './AddUser.helper';
import AddUserHeader from './AddUserHeader';

interface AddUserApplicationInfoProps {
  fields: AllFormFields[];
  formData: Record<string, any>;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
}

const AddUserApplicationInfo: React.FC<AddUserApplicationInfoProps> = ({
  fields,
  formData,
  errors,
  onFieldChange,
}) => {
  return (
    <div className="space-y-4">
      <AddUserHeader title={addUserTabsInitial[0]} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

export default AddUserApplicationInfo;
