import { Options, Validation } from './types';
/**
 * @param {Object} data The data to validate against a specific schema.
 * @param {'workflowTemplate'|'workflowStepTemplate'} [options.schema] The schema to validate against.
 *
 * @returns {Object} An object with the respective schema and validation errors.
 */
declare const validate: (data: Record<string, unknown>, { schema }?: Options) => Validation;
export default validate;
