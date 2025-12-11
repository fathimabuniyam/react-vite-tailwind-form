import { countries } from '../../constants/countries.constant';
import type { AllFormFields } from '../../types/form.types';
import { FileAcceptTypes } from '../../util/File.util';
import { businessFields } from './helpers/business-fields.helper';
import { cargoFields } from './helpers/cargo-fields.helper';
import { medicalFields } from './helpers/medical-fields.helper';
import { overflyFields } from './helpers/overfly-fields.helper';
import { technicalFields } from './helpers/technical-fields.helper';
import { trainingFields } from './helpers/training-fields.helper';

export const addUserTabsInitial = [
  'Application Information',
  'Purpose and Documents',
  'Additional Information',
  'Summary',
];

export const addUserTabs: Array<{
  id: string;
  title: string;
  fields: AllFormFields[];
}> = [
  {
    id: 'application-info',
    title: addUserTabsInitial[0],
    fields: [
      {
        id: 'name',
        label: 'Name',
        type: 'text',
        required: true,
        placeholder: 'eg: Fathima OB',
      },
      {
        id: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'eg: fathima@yopmail.com',
        validation: {
          pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
          message: 'Please enter a valid email address',
        },
      },
      {
        id: 'city',
        label: 'City',
        type: 'text',
        required: true,
        placeholder: 'eg: Doha',
      },
      {
        id: 'country',
        label: 'Country',
        type: 'select',
        options: countries,
        placeholder: 'Select a country',
        required: true,
      },
      {
        id: 'mobile',
        label: 'Mobile Number',
        type: 'number',
        required: true,
        placeholder: 'eg: 9876543210',
        validation: {
          pattern: '^[0-9]{10,15}$',
          message: 'Please enter valid mobile number',
        },
      },
      {
        id: 'address',
        label: 'Address',
        type: 'text',
        required: true,
        placeholder: 'eg: Street 123, Al Thumama',
      },
      {
        id: 'pin',
        label: 'PIN Code',
        type: 'number',
        required: true,
        placeholder: 'eg: 123456',
        validation: {
          pattern: '^[0-9]{6}$',
          message: 'Please enter 6-digit PIN',
        },
      },
    ],
  },
  {
    id: 'purpose-documents',
    title: addUserTabsInitial[1],
    fields: [
      {
        id: 'purpose',
        label: 'Purpose',
        placeholder: 'Select a purpose',
        type: 'select',
        required: true,
        options: [
          '',
          'Overfly',
          'Business',
          'Cargo',
          'Technical',
          'Medical',
          'Training',
        ],
      },
      ...overflyFields,
      ...businessFields,
      ...cargoFields,
      ...technicalFields,
      ...medicalFields,
      ...trainingFields,
    ],
  },
  {
    id: 'additional-info',
    title: addUserTabsInitial[2],
    fields: [
      {
        id: 'additionalDetails',
        label: 'Additional Details',
        type: 'textarea',
        required: false,
        placeholder: 'Enter any additional information',
      },
      {
        id: 'additionalAttachment',
        label: 'Additional Attachment',
        type: 'file',
        required: false,
        multiple: true,
        accept: FileAcceptTypes,
      },
    ],
  },
];
