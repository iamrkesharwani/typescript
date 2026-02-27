import type { ValidationError, ValidationResult, Schema } from './types.js';

export function validate(data: unknown, schema: Schema): ValidationResult {
  const errors: ValidationError[] = [];

  if (typeof data !== 'object' || data === null) {
    return [{ field: 'root', message: 'Invalid data' }];
  }

  const record = data as Record<string, unknown>;

  for (const [field, rules] of Object.entries(schema)) {
    const value = record[field];

    if (rules.required && (value === undefined || value === null)) {
      errors.push({
        field,
        message: `${field} is required`,
      });
      continue;
    }

    if (value === undefined || value === null) {
      continue;
    }

    switch (rules.type) {
      case 'string':
        if (typeof value !== 'string') {
          errors.push({
            field,
            message: `${field} must be a string`,
          });
          continue;
        }

        if (rules.minLength !== undefined && value.length < rules.minLength) {
          errors.push({
            field,
            message: `${field} must be at least ${rules.minLength} characters`,
          });
        }

        if (rules.maxLength !== undefined && value.length > rules.maxLength) {
          errors.push({
            field,
            message: `${field} must be at most ${rules.maxLength} characters`,
          });
        }
        break;

      case 'number':
        if (typeof value !== 'number') {
          errors.push({
            field,
            message: `${field} must be a number`,
          });
          continue;
        }

        if (rules.min !== undefined && value < rules.min) {
          errors.push({
            field,
            message: `${field} must be >= ${rules.min}`,
          });
        }

        if (rules.max !== undefined && value > rules.max) {
          errors.push({
            field,
            message: `${field} must be <= ${rules.max}`,
          });
        }
        break;

      default:
        const _exhaustiveCheck: never = rules;
        void _exhaustiveCheck;
        break;
    }
  }
  return errors;
}
