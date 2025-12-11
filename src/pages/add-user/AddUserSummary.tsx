import React from 'react';
import type { UserFormData } from '../../types/user.types';
import { addUserTabsInitial } from './AddUser.helper';
import AddUserHeader from './AddUserHeader';

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
  const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) return 'None';
      if (value[0] instanceof File) {
        return `${value.length} file(s)`;
      }
      return value.join(', ');
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return value || 'Not provided';
  };

  const sections = [
    {
      title: 'Application Information',
      fields: [
        { label: 'Name', key: 'name' },
        { label: 'Email', key: 'email' },
        { label: 'City', key: 'city' },
        { label: 'Country', key: 'country' },
        { label: 'Mobile Number', key: 'mobile' },
        { label: 'Address', key: 'address' },
        { label: 'PIN Code', key: 'pin' },
      ],
    },
    {
      title: 'Purpose and Documents',
      fields: [
        { label: 'Purpose', key: 'purpose' },
        { label: 'Traveler Manifest', key: 'travelerManifest' },
        {
          label: 'Authorized Signatory Record',
          key: 'authorizedSignatoryRecord',
        },
      ],
    },
    {
      title: 'Additional Information',
      fields: [
        { label: 'Additional Details', key: 'additionalDetails' },
        { label: 'Additional Attachment', key: 'additionalAttachment' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <AddUserHeader title={addUserTabsInitial[3]} />

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field) => (
                <div key={field.key} className="mb-3">
                  <p className="text-sm font-medium text-gray-500">
                    {field.label}
                  </p>
                  <p className="text-base text-gray-800">
                    {formatValue(formData[field.key])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            disabled={!formData.agreement}
            className={`px-6 py-2 rounded-md ${formData.agreement ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserSummary;
