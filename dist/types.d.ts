import { ValidateFunction } from 'ajv';

export interface Options {
  schema?: 'workflowTemplate' | 'workflowStepTemplate';
}

export interface Validation {
  schema: ValidateFunction['schema'];
  errors: ValidateFunction['errors'];
}
