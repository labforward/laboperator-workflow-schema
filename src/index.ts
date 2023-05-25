import type { Options, Validation } from './types';
import validate from './validation';
import workflowEventSchema from './workflow-event-schema.json';
import workflowStepTemplateSchema from './workflow-step-template-schema.json';
import workflowTemplateSchema from './workflow-template-schema.json';

export const schemas = {
  workflowEventSchema,
  workflowStepTemplateSchema,
  workflowTemplateSchema,
};

export { Options, Validation, validate };
