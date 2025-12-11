import React, { type JSX } from 'react';
import type { UserFormData } from '../../types/user.types';
import { addUserTabs } from './AddUser.helper';

type Props = {
  formData: UserFormData;
};

const AddUserSummaryView: React.FC<Props> = ({ formData }) => {
  const renderFile = (value: File[]) => {
    const fileCount = value.length;

    return (
      <details className="cursor-pointer">
        <summary className="text-blue-400">
          {fileCount} file{fileCount > 1 ? 's' : ''}
        </summary>
        <ul className="list-disc list-inside mt-2 text-gray-700 ml-4">
          {value.map((file: File, index: number) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </details>
    );
  };

  const renderValue = (value: any): string | JSX.Element => {
    if (Array.isArray(value)) {
      if (value.length === 0) return 'None';

      if (value[0] instanceof File) {
        return renderFile(value);
      }
      return value.join(', ');
    }

    if (typeof value === 'boolean') {
      return <p className="text-base text-gray-800">{value ? 'Yes' : 'No'}</p>;
    }

    return <p className="text-base text-gray-800">{value || 'Not provided'}</p>;
  };

  const purposeFields = addUserTabs[1].fields.filter((field) => {
    // Show field only if:
    // 1. No conditional (always show)
    // 2. Conditional purpose matches selected purpose
    return !field.conditional || field.conditional.value === formData.purpose;
  });

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
      fields: purposeFields.map((field) => ({
        label: field.label,
        key: field.id,
      })),
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
      {sections.map((section) => (
        <div key={section.title} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            {section.title}
          </h3>
          <div className="">
            {section.fields.map((field) => (
              <div
                key={field.key}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3"
              >
                <p className="text-sm font-medium text-gray-500">
                  {field.label}
                </p>

                {renderValue(formData[field.key])}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddUserSummaryView;
