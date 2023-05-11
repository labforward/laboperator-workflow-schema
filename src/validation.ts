import addFormats from 'ajv-formats';
import Ajv, { ValidateFunction } from 'ajv';

import { Options, Validation } from './types';
import workflowEventTemplate from './workflow-event-schema.json';
import workflowStepTemplate from './workflow-step-template-schema.json';
import workflowTemplate from './workflow-template-schema.json';

const ajv = new Ajv({
  // Check all rules collecting all errors.
  allErrors: true,
  // Allow using multiple non-null types in "type" keyword
  allowUnionTypes: true,
  // Include reference to the part of the schema and validated data in errors.
  verbose: true,
  // Skip iterating over enumerable prototype properties.
  ownProperties: true,
});

/**
 * Allow custom keyword that enables rich formatting for on hover documentation
 * in VS Code. See compilation script for implementation details.
 *
 * https://code.visualstudio.com/docs/languages/json#_use-rich-formatting-in-hovers
 */
ajv.addKeyword({
  keyword: 'markdownDescription',
  schemaType: 'string',
});

// https://github.com/ajv-validator/ajv-formats
addFormats(ajv);

const validationFunctions = {
  workflowTemplate: ajv.compile(workflowTemplate),
  workflowStepTemplate: ajv.compile(workflowStepTemplate),
  workflowEventTemplate: ajv.compile(workflowEventTemplate),
};

const validateTemplate = (
  data: unknown,
  validationFunction: ValidateFunction<{
    [x: string]: unknown;
  }>
) => {
  const isValid = validationFunction(data);
  const result: Validation = {
    schema: validationFunction.schema,
    errors: null,
  };

  if (!isValid) result.errors = validationFunction.errors;

  return result;
};

/**
 * @param {?} data The data to validate against a specific schema.
 * @param {Options} [options.schema] The schema to validate against.
 *
 * @returns {Object} An object with the respective schema and validation errors.
 */
const validate = (
  data: unknown,
  { schema = 'workflowTemplate' }: Options = {}
) => validateTemplate(data, validationFunctions[schema]);

export default validate;
