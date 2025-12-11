import type { AllFormFields } from '../../../types/form.types';

export const trainingFields: AllFormFields[] = [
  {
    id: 'completeATSRoute',
    label: 'Complete ATS Route',
    type: 'text',
    required: true,
    placeholder: '',
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
    placeholder: '',
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
    placeholder: '',
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
    placeholder: '',
    conditional: {
      field: 'purpose',
      value: 'Training',
    },
  },
];
