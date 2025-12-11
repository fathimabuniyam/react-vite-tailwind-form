import type { AllFormFields } from '../../../types/form.types';

export const overflyFields: AllFormFields[] = [
  {
    id: 'filedRoutePlan',
    label: 'Filed Route Plan',
    type: 'text',
    required: true,
    placeholder: '',
    conditional: {
      field: 'purpose',
      value: 'Overfly',
    },
  },
];
