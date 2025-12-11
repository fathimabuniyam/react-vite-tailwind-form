import type { AllFormFields } from '../../../types/form.types';

export const trainingFields: AllFormFields[] = [
  {
    id: 'completeATSRoute',
    label: 'Complete ATS Route',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Training',
    },
  },
  {
    id: 'circuitLandingCount',
    label: 'Circuit Landing Count',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Training',
    },
  },
  {
    id: 'trainingSessionSchedule',
    label: 'Training Session Schedule',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Training',
    },
  },
  {
    id: 'groundHandlingConfirmation2',
    label: 'Ground Handling Confirmation',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Training',
    },
  },
];
