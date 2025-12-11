import { Check } from 'lucide-react';
import React from 'react';

interface StepIndicatorProps {
  tabs: string[];
  currentTab: number;
  onTabChange: (tabIndex: number) => void;
  isTabComplete: (tabIndex: number) => boolean;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  tabs,
  currentTab,
  onTabChange,
}) => {
  const renderTab = (tab: string, index: number) => {
    const isSelected = index === currentTab;
    const isComplete = index < currentTab;

    return (
      <div
        key={index}
        className={`flex items-center cursor-default ${index === tabs.length - 1 ? '' : 'flex-1'}`}
        onClick={() => onTabChange(index)}
      >
        <div
          className={`flex items-center p-2 pr-4 rounded-3xl min-w-fit md:min-w-[200px] ${
            isSelected
              ? 'bg-blue-900 text-white'
              : isComplete
                ? 'bg-blue-400 text-white'
                : 'bg-gray-200 text-black'
          }`}
        >
          {/* Icon */}
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm ${
              isComplete ? 'bg-white' : 'bg-white text-blue-900'
            }`}
          >
            {isComplete ? (
              <Check color="#3bd111" size={16} strokeWidth={5} />
            ) : (
              String(index + 1).padStart(2, '0')
            )}
          </div>

          {/* Title */}
          <span className={`ml-2 text-sm font-medium`}>{tab}</span>
        </div>

        {/* Connector */}
        {index < tabs.length - 1 && (
          <div
            className={`flex-1 h-0.5 ${
              isComplete ? 'bg-blue-400' : 'bg-gray-200'
            }`}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap mb-8">
      {tabs.map((tab, index) => renderTab(tab, index))}
    </div>
  );
};

export default StepIndicator;
