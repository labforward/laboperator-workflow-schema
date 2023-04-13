import addFormats from 'ajv-formats';
import Ajv from 'ajv';

import { Options, Validation } from './types';
import workflowStepTemplate from './workflow_step_template_schema.json';
import workflowTemplate from './workflow_template_schema.json';

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

const validateTemplate = ajv.compile(workflowTemplate);
const validateStepTemplate = ajv.compile(workflowStepTemplate);

const validateWorkflowTemplate = (data: unknown) => {
  const isValid = validateTemplate(data);
  const result: Validation = {
    schema: validateTemplate.schema,
    errors: null,
  };

  if (!isValid) result.errors = validateTemplate.errors;

  return result;
};

const validateWorkflowStepTemplate = (data: unknown) => {
  const isValid = validateStepTemplate(data);
  const result: Validation = {
    schema: validateStepTemplate.schema,
    errors: null,
  };

  if (!isValid) result.errors = validateStepTemplate.errors;

  return result;
};

/**
 * @param {?} data The data to validate against a specific schema.
 * @param {'workflowTemplate'|'workflowStepTemplate'} [options.schema] The schema to validate against.
 *
 * @returns {Object} An object with the respective schema and validation errors.
 */
const validate = (
  data: unknown,
  { schema = 'workflowTemplate' }: Options = {}
) => {
  if (schema === 'workflowTemplate') {
    return validateWorkflowTemplate(data);
  } else {
    return validateWorkflowStepTemplate(data);
  }
};

export default validate;
