export type StringFieldRule = {
  type: 'string';
  required?: boolean;
  minLength?: number;
  maxLength?: number;
};

export type NumberFieldRule = {
  type: 'number';
  required?: boolean;
  min?: number;
  max?: number;
};

export type FieldRule = StringFieldRule | NumberFieldRule;

export type Schema = {
  [field: string]: FieldRule;
};

export type ValidationError = {
  field: string;
  message: string;
};

export type ValidationResult = ValidationError[];
