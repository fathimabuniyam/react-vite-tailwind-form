import type { AllFormFields } from '../../../types/form.types';
import { FileAcceptTypes } from '../../../util/File.util';

export const businessFields: AllFormFields[] = [
  {
    id: 'operatingCrewProfile',
    label: 'Operating Crew Profile',
    type: 'file',
    required: true,
    multiple: true,
    accept: FileAcceptTypes,
    conditional: {
      field: 'purpose',
      value: 'Business',
    },
  },
  {
    id: 'travelerManifest',
    label: 'Traveler Manifest',
    type: 'file',
    required: true,
    multiple: true,
    accept: FileAcceptTypes,
    conditional: {
      field: 'purpose',
      value: 'Business',
    },
  },
  {
    id: 'receivingContactReference',
    label: 'Receiving Contact Reference',
    type: 'file',
    required: true,
    multiple: true,
    accept: FileAcceptTypes,
    conditional: {
      field: 'purpose',
      value: 'Business',
    },
  },
  {
    id: 'authorizedSignatoryRecord',
    label: 'Authorized Signatory Record',
    type: 'file',
    required: true,
    multiple: false,
    accept: FileAcceptTypes,
    conditional: {
      field: 'purpose',
      value: 'Business',
    },
  },
  {
    id: 'connectionSectorConfirmation',
    label: 'Connecting Sector Confirmation',
    type: 'file',
    required: true,
    multiple: false,
    accept: FileAcceptTypes,
    conditional: {
      field: 'purpose',
      value: 'Business',
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
      value: 'Business',
    },
  },
];
