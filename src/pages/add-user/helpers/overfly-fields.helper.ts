import type { AllFormFields } from '../../../types/form.types';

export const overflyFields: AllFormFields[] = [
  {
    id: 'filedRoutePlan',
    label: 'Filed Route Plan',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Overfly',
    },
  },
];
