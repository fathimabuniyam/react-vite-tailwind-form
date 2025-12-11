import { useDispatch } from 'react-redux';
import StepIndicator from '../../components/StepIndicator';
import {
  clearErrors,
  markTabVisited,
  setCurrentTab,
} from '../../store/slices/add-user.slice';
import { addUserTabsInitial } from './AddUser.helper';

type AddUserStepIndicatorsProps = {
  currentTab: number;
  isTabComplete: (tabIndex: number) => boolean;
};

const AddUserStepIndicators: React.FC<AddUserStepIndicatorsProps> = ({
  currentTab,
  isTabComplete,
}) => {
  const dispatch = useDispatch();

  return (
    <StepIndicator
      tabs={addUserTabsInitial}
      currentTab={currentTab}
      onTabChange={(index) => {
        if (index < currentTab || isTabComplete(currentTab)) {
          dispatch(setCurrentTab(index));
          dispatch(markTabVisited(index));
          dispatch(clearErrors());
        }
      }}
      isTabComplete={isTabComplete}
    />
  );
};

export default AddUserStepIndicators;
