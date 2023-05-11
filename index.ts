import type { Options, Validation } from './dist/types';
import validate from './dist/validation';
import workflowEventSchema from './dist/workflow-event-schema.json';
import workflowStepTemplateSchema from './dist/workflow-step-template-schema.json';
import workflowTemplateSchema from './dist/workflow-template-schema.json';

export const schemas = {
  workflowTemplateSchema,
  workflowStepTemplateSchema,
  workflowEventSchema,
};

export { Options, Validation, validate };
