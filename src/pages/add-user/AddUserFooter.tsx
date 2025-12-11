import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import {
  clearErrors,
  markTabVisited,
  selectForm,
  setCurrentTab,
  setErrors,
} from '../../store/slices/add-user.slice';
import type { AllFormFields } from '../../types/form.types';
import { addUserTabs, addUserTabsInitial } from './AddUser.helper';

type AddUserFooterProps = {
  isTabComplete: (tabIndex: number) => boolean;
};

const AddUserFooter: React.FC<AddUserFooterProps> = ({ isTabComplete }) => {
  const dispatch = useDispatch();
  const { currentTab, formData } = useSelector(selectForm);

  const validateTab = (tabIndex: number): boolean => {
    const tabFields = addUserTabs[tabIndex]?.fields || [];
    const newErrors: Record<string, string> = {};
    let isValid = true;

    tabFields.forEach((field: AllFormFields) => {
      const value = formData[field.id];
      const isConditionalField =
        field.conditional &&
        formData[field.conditional.field] !== field.conditional.value;

      if (field.required && !isConditionalField) {
        // Check 1: Is value empty?
        if (!value || (Array.isArray(value) && value.length === 0)) {
          newErrors[field.id] = `${field.label} is required`;
          isValid = false;
        }

        // Check 2: Does it match validation pattern?
        else if (field.validation?.pattern && typeof value === 'string') {
          const pattern = new RegExp(field.validation.pattern);

          if (!pattern.test(value)) {
            newErrors[field.id] = field.validation.message || 'Invalid format';
            isValid = false;
          }
        }
      }
    });

    dispatch(setErrors(newErrors));
    return isValid;
  };

  const isNextDisabled = () => {
    if (currentTab === addUserTabsInitial.length - 1) return false;
    return !isTabComplete(currentTab);
  };

  // Next Button: Validate Tabs; if valid, Clear all errors
  const handleNext = () => {
    if (validateTab(currentTab) && currentTab < addUserTabsInitial.length - 1) {
      dispatch(setCurrentTab(currentTab + 1));
      dispatch(markTabVisited(currentTab + 1));
      dispatch(clearErrors());
    }
  };

  // Previous Button: Clear all errors
  const handlePrevious = () => {
    if (currentTab > 0) {
      dispatch(setCurrentTab(currentTab - 1));
      dispatch(clearErrors());
    }
  };

  return (
    currentTab < addUserTabsInitial.length - 1 && (
      <div className="flex justify-between pt-6 border-t border-t-gray-200">
        {currentTab !== 0 && (
          <Button type="button" color="secondary" onClick={handlePrevious}>
            ← Previous
          </Button>
        )}
        <Button
          type="button"
          onClick={handleNext}
          color={isNextDisabled() ? 'disabled' : 'primary'}
          disabled={isNextDisabled()}
          className="ml-auto"
        >
          Next →
        </Button>
      </div>
    )
  );
};

export default AddUserFooter;
