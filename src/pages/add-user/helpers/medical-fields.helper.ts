import type { AllFormFields } from '../../../types/form.types';

export const medicalFields: AllFormFields[] = [
  {
    id: 'medicalFacilityNote',
    label: 'Medical Facility Note',
    type: 'file',
    required: true,
    multiple: false,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg',
    conditional: {
      field: 'purpose',
      value: 'Medical',
    },
  },
  {
    id: 'passengerDetails',
    label: 'Passenger Details ',
    type: 'file',
    required: true,
    multiple: false,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg',
    conditional: {
      field: 'purpose',
      value: 'Medical',
    },
  },
  {
    id: 'groundHandlingConfirmation1',
    label: 'Ground Handling Confirmation',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Medical',
    },
  },
];
