import React from 'react';
import Button from '../../components/Button';
import FormCheckbox from '../../components/Form/FormCheckbox';
import type { UserFormData } from '../../types/user.types';
import { addUserTabsInitial } from './AddUser.helper';
import AddUserHeader from './AddUserHeader';
import AddUserSummaryView from './AddUserSummaryView';

interface AddUserSummaryProps {
  formData: UserFormData;
  errors: Record<string, string>;
  onFieldChange: (field: string, value: any) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const AddUserSummary: React.FC<AddUserSummaryProps> = ({
  formData,
  errors,
  onFieldChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="space-y-6">
      <AddUserHeader title={addUserTabsInitial[3]} />

      <AddUserSummaryView formData={formData} />

      <div className="bg-white rounded-lg shadow p-6">
        <FormCheckbox
          field={{
            id: 'agreement',
            label: 'I agree to the terms and conditions',
            type: 'checkbox',
            required: true,
          }}
          value={!!formData.agreement}
          onChange={(value) => onFieldChange('agreement', value)}
          error={errors['agreement']}
        />

        <div className="flex justify-between mt-6">
          <Button type="button" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="button" color="primary" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUserSummary;
