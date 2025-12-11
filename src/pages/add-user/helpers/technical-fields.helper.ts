import type { AllFormFields } from '../../../types/form.types';

export const technicalFields: AllFormFields[] = [
  {
    id: 'maintenanceConfirmation',
    label: 'Maintenance Confirmation',
    type: 'file',
    required: true,
    multiple: false,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg',
    conditional: {
      field: 'purpose',
      value: 'Technical',
    },
  },
  {
    id: 'crewExitLog',
    label: 'Crew Exit Log',
    type: 'file',
    required: true,
    multiple: false,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg',
    conditional: {
      field: 'purpose',
      value: 'Technical',
    },
  },
  {
    id: 'accommodationBookingProof',
    label: 'Accommodation Booking Proof',
    type: 'checkbox',
    required: false,
    conditional: {
      field: 'purpose',
      value: 'Technical',
    },
  },
  {
    id: 'hotelConfirmation',
    label: 'If Yes please provide Hotel Confirmation',
    type: 'file',
    required: true,
    multiple: false,
    accept: '.pdf,.doc,.docx,.png,.jpeg,.jpg',
    conditional: {
      field: 'accommodationBookingProof',
      value: true,
    },
  },
  {
    id: 'groundHandlingConfirmation',
    label: 'Ground Handling Confirmation',
    type: 'text',
    required: true,
    placeholder:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    conditional: {
      field: 'purpose',
      value: 'Technical',
    },
  },
];
