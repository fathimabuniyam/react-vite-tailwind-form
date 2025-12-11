import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetForm,
  resetVisitedTabs,
  selectForm,
  setErrors,
  setSubmitting,
  updateFormData,
} from '../../store/slices/add-user.slice';
import { addUserTabs } from './AddUser.helper';
import AddUserAdditionalInfo from './AddUserAdditionalInfo';
import AddUserApplicationInfo from './AddUserApplicationInfo';
import AddUserFooter from './AddUserFooter';
import AddUserPurposeDocuments from './AddUserPurposeDocuments';
import AddUserStepIndicators from './AddUserStepIndicators';
import AddUserSummary from './AddUserSummary';

const AddUser: React.FC = () => {
  const dispatch = useDispatch();

  const { currentTab, visitedTabs, formData, errors, isSubmitting } =
    useSelector(selectForm);

  const handleFieldChange = (field: string, value: any) => {
    dispatch(updateFormData({ field, value }));
  };

  const handleSubmit = async () => {
    if (!formData.agreement) {
      dispatch(
        setErrors({ agreement: 'You must agree to the terms and conditions' }),
      );
      return;
    }

    dispatch(setSubmitting(true));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert('Application submitted successfully!');

    dispatch(resetForm());
    dispatch(resetVisitedTabs());
    dispatch(setSubmitting(false));
  };

  const handleCancel = () => {
    if (
      window.confirm('Are you sure you want to cancel? All data will be lost.')
    ) {
      dispatch(resetForm());
    }
  };

  const isTabComplete = (tabIndex: number): boolean => {
    // Only consider a tab if it has been visited
    if (!visitedTabs.includes(tabIndex)) return false;

    const tabFields = addUserTabs[tabIndex]?.fields || [];

    // If tab has no required fields, treat as complete after visiting
    const hasRequiredFields = tabFields.some((field) => field.required);
    if (!hasRequiredFields) return true;

    return tabFields.every((field: any) => {
      if (!field.required) return true;

      // Conditional fields
      if (field.conditional) {
        const { field: cField, value: cValue } = field.conditional;
        const shouldShow = formData[cField] === cValue;
        if (!shouldShow) return true; // bypass validation if not shown
      }

      const value = formData[field.id];

      if (field.type === 'file')
        return Array.isArray(value) && value.length > 0;

      return !!value;
    });
  };

  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return (
          <AddUserApplicationInfo
            fields={addUserTabs[0].fields}
            formData={formData}
            errors={errors}
            onFieldChange={handleFieldChange}
          />
        );
      case 1:
        return (
          <AddUserPurposeDocuments
            fields={addUserTabs[1].fields}
            formData={formData}
            errors={errors}
            onFieldChange={handleFieldChange}
          />
        );
      case 2:
        return (
          <AddUserAdditionalInfo
            fields={addUserTabs[2].fields}
            formData={formData}
            errors={errors}
            onFieldChange={handleFieldChange}
          />
        );
      case 3:
        return (
          <AddUserSummary
            formData={formData}
            errors={errors}
            onFieldChange={handleFieldChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="bg-white rounded-lg shadow-lg p-5 md:p-10">
        <AddUserStepIndicators
          currentTab={currentTab}
          isTabComplete={isTabComplete}
        />

        <div className="max-w-[880px] mb-8">{renderTabContent()}</div>

        <AddUserFooter isTabComplete={isTabComplete} />

        {isSubmitting && (
          <div className="fixed inset-0 bg-[#00000087] flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3">Submitting your application...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
