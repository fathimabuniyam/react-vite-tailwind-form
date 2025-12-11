export interface BaseField {
  id: string;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern?: string;
    message?: string;
  };
  conditional?: {
    field: string;
    value: string | boolean;
  };
}

export interface FormFieldInput extends BaseField {
  type: 'text' | 'email' | 'number' | 'textarea' | 'checkbox';
}
export interface FormFieldSelect extends BaseField {
  type: 'select';
  options: string[];
}
export interface FormFieldFileUpload extends BaseField {
  type: 'file';
  multiple?: boolean;
  accept?: string;
}

export type AllFormFields =
  | FormFieldInput
  | FormFieldSelect
  | FormFieldFileUpload;
