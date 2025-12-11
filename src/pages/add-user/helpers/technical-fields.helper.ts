import type { AllFormFields } from '../../../types/form.types';
import { FileAcceptTypes } from '../../../util/File.util';

export const technicalFields: AllFormFields[] = [
  {
    id: 'maintenanceConfirmation',
    label: 'Maintenance Confirmation',
    type: 'file',
    required: true,
    multiple: false,
    accept: FileAcceptTypes,
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
    accept: FileAcceptTypes,
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
    accept: FileAcceptTypes,
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
    placeholder: '',
    conditional: {
      field: 'purpose',
      value: 'Technical',
    },
  },
];
