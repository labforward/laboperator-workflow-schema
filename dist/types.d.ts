import { ValidateFunction } from 'ajv';

export interface Options {
  schema?:
    | 'workflowEventTemplate'
    | 'workflowStepTemplate'
    | 'workflowTemplate';
}

export interface Validation {
  errors: ValidateFunction['errors'];
  schema: ValidateFunction['schema'];
}
