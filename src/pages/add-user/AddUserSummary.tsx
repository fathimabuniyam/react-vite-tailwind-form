import React from 'react';
import Button from '../../components/Button';
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
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="agreement"
            checked={!!formData.agreement}
            onChange={(e) => onFieldChange('agreement', e.target.checked)}
            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label htmlFor="agreement" className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        {errors.agreement && (
          <p className="text-red-500 text-sm">{errors.agreement}</p>
        )}

        <div className="flex justify-between mt-6">
          <Button type="button" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            onClick={onSubmit}
            disabled={!formData.agreement}
          >
            Submit Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUserSummary;
