import validate from 'dist/validation';

import type { Options, Validation } from './types';
import workflowEventSchema from './workflow-event-schema.json';
import workflowStepTemplateSchema from './workflow-step-template-schema.json';
import workflowTemplateSchema from './workflow-template-schema.json';

export const schemas = {
  workflowTemplateSchema,
  workflowStepTemplateSchema,
  workflowEventSchema,
};

export { Options, Validation, validate };
